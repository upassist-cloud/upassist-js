// ingest.ts
var HEARTBEATS_URL = "https://heartbeats.upassist.cloud";
var LOGS_URL = "https://logs.upassist.cloud";
var METRICS_URL = "https://metrics.upassist.cloud";
var RUM_URL = "https://rum.upassist.cloud";
async function send(url, init) {
  const response = await fetch(url, init);
  const body = await response.text();
  if (!response.ok) {
    throw new Error(`${response.status} ${body}`);
  }
  return body;
}
function heartbeatPing(apiKey, slug, options) {
  const params = new URLSearchParams();
  if (options?.error) params.set("error", "true");
  if (options?.message) params.set("errorMessage", options.message);
  const query = params.toString() ? `?${params}` : "";
  return send(`${HEARTBEATS_URL}/api/event/${encodeURIComponent(slug)}${query}`, {
    headers: { Authorization: `Bearer ${apiKey}` }
  });
}
function collectLogs(token, entries) {
  return send(`${LOGS_URL}/collect`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(entries)
  });
}
function collectMetrics(token, points) {
  return send(`${METRICS_URL}/collect`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(points)
  });
}
function trackSiteEvent(event) {
  return send(`${RUM_URL}/api/sites/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event)
  });
}
export {
  collectLogs,
  collectMetrics,
  heartbeatPing,
  trackSiteEvent
};
