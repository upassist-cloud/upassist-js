# Upassist TypeScript & JavaScript SDK

Official TypeScript & JavaScript client for the [Upassist](https://upassist.cloud) Monitoring, Uptime, Cron Heartbeats, Error Tracking & Observability Platform.

[![npm version](https://img.shields.io/npm/v/upassist.svg)](https://www.npmjs.com/package/upassist)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

- **Complete API Coverage**: 100% of platform resources (Monitors, Heartbeats, Incidents, Maintenance, Error Apps, Status Pages, Dashboards, Members, API Keys, Logs, Metrics).
- **Dual ESM & CommonJS**: Works out-of-the-box in Node.js (>=18), Bun, Deno, Next.js, Remix, Vite, and legacy CJS projects.
- **Strict TypeScript Types**: Fully typed parameters, responses, and errors generated directly from Upassist OpenAPI 3.1 specifications.
- **High-Throughput Ingestion**: Dedicated `upassist/ingest` module for cron pings, structured log streaming, and metric submission.

---

## Installation

```bash
npm install upassist
# or
yarn add upassist
# or
pnpm add upassist
```

---

## Authentication & Setup

```typescript
import { client } from 'upassist';

// Configure global API key and base URL
client.setConfig({
  baseURL: 'https://api.upassist.cloud',
  headers: {
    Authorization: `Bearer ${process.env.UPASSIST_API_KEY}`,
  },
});
```

---

## Practical Examples

### 1. Uptime Monitoring & Health Checks

Create, inspect, and toggle HTTP/TCP/Ping monitors programmatically:

```typescript
import { monitorCreate, monitorList, monitorPause, monitorUnpause } from 'upassist';

// Create a new HTTP monitor
const { data: monitor } = await monitorCreate({
  body: {
    name: 'Production Auth API',
    url: 'https://auth.example.com/health',
    interval: 60,               // check every 60s
    timeout: 10,
    expected_status_code: 200,
    send_email: true,
  },
});

console.log('Created monitor:', monitor?.id);

// List active monitors
const { data: monitors } = await monitorList({
  query: { page: 1, per_page: 50 },
});

// Temporarily pause checks during maintenance
if (monitor?.id) {
  await monitorPause({ path: { id: monitor.id } });
  // Resume:
  await monitorUnpause({ path: { id: monitor.id } });
}
```

---

### 2. Cron Job & Worker Monitoring (Heartbeats)

Never let a background script or cron job silently fail:

```typescript
import { heartbeatPing } from 'upassist/ingest';

async function runScheduledExport() {
  const token = 'nightly-data-export';
  const start = Date.now();

  try {
    // Run your scheduled job...
    await performExport();

    // Report success
    await heartbeatPing({
      apiKey: process.env.UPASSIST_API_KEY!,
      token,
      status: 'up',
      durationMs: Date.now() - start,
      message: 'Export completed with 4,500 records',
    });
  } catch (error: any) {
    // Report failure to trigger on-call alert
    await heartbeatPing({
      apiKey: process.env.UPASSIST_API_KEY!,
      token,
      status: 'down',
      durationMs: Date.now() - start,
      message: error?.message || 'Export crashed',
    });
    throw error;
  }
}
```

---

### 3. CI/CD Deployment: Alert Silencing via Maintenance Windows

Silence notifications while rolling out database migrations and new containers:

```typescript
import { maintenanceCreate, maintenanceDelete } from 'upassist';

// 1. Create a 20-minute maintenance window
const start = new Date();
const end = new Date(start.getTime() + 20 * 60 * 1000);

const { data: window } = await maintenanceCreate({
  body: {
    name: 'Release v2.8.0 Deployment',
    started_at: start.toISOString(),
    finished_at: end.toISOString(),
    timezone: 'UTC',
    resources: [
      { public_name: 'Auth API', object_id: '101', resource_type: 'monitor' },
    ],
  },
});

console.log('Maintenance active:', window?.id);

// ... Run deploy & migrations ...

// 2. Clear window when deployment finishes early
if (window?.id) {
  await maintenanceDelete({ path: { id: window.id } });
  console.log('Alerts resumed.');
}
```

---

### 4. Incident Response & Auto-Resolution

```typescript
import { incidentList, incidentAck, incidentResolve } from 'upassist';

// Fetch open incidents
const { data: incidentPage } = await incidentList({ query: { page: 1 } });

for (const incident of incidentPage?.items || []) {
  console.log(`Incident #${incident.id}: ${incident.cause} (${incident.state})`);

  // Acknowledge incident
  if (incident.state === 'started') {
    await incidentAck({ path: { id: incident.id } });
    console.log(` -> Acknowledged #${incident.id}`);
  }
}
```

---

### 5. High-Throughput Log & Metric Telemetry

Stream logs and custom gauges/counters straight to Upassist telemetry collectors:

```typescript
import { collectLogs, collectMetrics } from 'upassist/ingest';

// Send structured application logs
await collectLogs({
  apiKey: process.env.UPASSIST_API_KEY!,
  service: 'billing-service',
  logs: [
    {
      level: 'INFO',
      message: 'Subscription renewed',
      context: { customerId: 'cust_771', plan: 'enterprise' },
      timestamp: new Date().toISOString(),
    },
  ],
});

// Send custom application metrics
await collectMetrics({
  apiKey: process.env.UPASSIST_API_KEY!,
  metrics: [
    {
      name: 'active_sessions',
      value: 1250,
      type: 'gauge',
      labels: { cluster: 'eu-west-1' },
    },
    {
      name: 'checkout_duration_ms',
      value: 235.4,
      type: 'histogram',
    },
  ],
});
```

---

### 6. Managing Error Apps & Sentry-Compatible Issues

```typescript
import { errorAppList, errorAppIssueList, errorAppIssueUpdate } from 'upassist';

// List configured error applications
const { data: apps } = await errorAppList();

if (apps && apps.length > 0) {
  const appId = apps[0].id;

  // List recent issues
  const { data: issues } = await errorAppIssueList({ path: { app_id: appId } });

  for (const issue of issues?.items || []) {
    console.log(`Issue: ${issue.title} (Events: ${issue.events_count})`);

    // Mark issue resolved after releasing a patch:
    await errorAppIssueUpdate({
      path: { app_id: appId, issue_id: issue.id },
      body: { status: 'resolved' },
    });
  }
}
```

---

## License

MIT
