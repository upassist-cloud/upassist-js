"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ingest.ts
var ingest_exports = {};
__export(ingest_exports, {
  collectLogs: () => collectLogs,
  collectMetrics: () => collectMetrics,
  heartbeatPing: () => heartbeatPing,
  trackSiteEvent: () => trackSiteEvent
});
module.exports = __toCommonJS(ingest_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  collectLogs,
  collectMetrics,
  heartbeatPing,
  trackSiteEvent
});
