const HEARTBEATS_URL = "https://heartbeats.upassist.cloud";
const LOGS_URL = "https://logs.upassist.cloud";
const METRICS_URL = "https://metrics.upassist.cloud";
const RUM_URL = "https://rum.upassist.cloud";

async function send(url: string, init: RequestInit): Promise<string> {
  const response = await fetch(url, init);
  const body = await response.text();
  if (!response.ok) {
    throw new Error(`${response.status} ${body}`);
  }
  return body;
}

export function heartbeatPing(apiKey: string, slug: string, options?: { error?: boolean; message?: string }): Promise<string> {
  const params = new URLSearchParams();
  if (options?.error) params.set("error", "true");
  if (options?.message) params.set("errorMessage", options.message);
  const query = params.toString() ? `?${params}` : "";
  return send(`${HEARTBEATS_URL}/api/event/${encodeURIComponent(slug)}${query}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
}

export function collectLogs(token: string, entries: unknown[]): Promise<string> {
  return send(`${LOGS_URL}/collect`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(entries),
  });
}

export function collectMetrics(token: string, points: unknown[]): Promise<string> {
  return send(`${METRICS_URL}/collect`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(points),
  });
}

export function trackSiteEvent(event: unknown): Promise<string> {
  return send(`${RUM_URL}/api/sites/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
}
