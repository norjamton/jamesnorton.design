const { onRequest } = require("firebase-functions/v2/https");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: "./service-account.json",
});

const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const ALLOWED_ORIGINS = true; // Allow all origins

let cachedCount = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

async function fetchVisitorCount() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
    metrics: [{ name: "screenPageViews" }],
  });
  return parseInt(response.rows[0].metricValues[0].value, 10);
}

exports.getVisitorCount = onRequest(
  { cors: ALLOWED_ORIGINS },
  async (req, res) => {
    const now = Date.now();

    if (cachedCount !== null && now - cacheTimestamp < CACHE_TTL_MS) {
      res.set("Cache-Control", "public, max-age=300");
      return res.json({ count: cachedCount });
    }

    try {
      cachedCount = await fetchVisitorCount();
      cacheTimestamp = now;
      res.set("Cache-Control", "public, max-age=300");
      return res.json({ count: cachedCount });
    } catch (err) {
      console.error("GA4 API error:", err);
      if (cachedCount !== null) {
        return res.json({ count: cachedCount });
      }
      return res.status(500).json({ error: "Could not fetch visitor count" });
    }
  }
);
