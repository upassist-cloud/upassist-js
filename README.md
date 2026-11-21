# Upassist TypeScript / JavaScript SDK

Official TypeScript & JavaScript client for the [Upassist](https://upassist.cloud) Public Management & Ingestion API. Fully typed, zero unnecessary dependencies, dual ESM and CommonJS support.

## Installation

```bash
npm install upassist
# or
yarn add upassist
# or
pnpm add upassist
```

## Quickstart

### 1. Management API Client

Authenticate using your Upassist Project API Key:

```typescript
import { client, monitorList, monitorCreate, heartbeatList } from 'upassist';

// Set base URL and API key
client.setConfig({
  baseURL: 'https://upassist.cloud',
  headers: {
    Authorization: 'Bearer up_live_your_api_key_here',
  },
});

// List all monitors
async function main() {
  const { data: monitors, error } = await monitorList();
  if (error) {
    console.error('Error fetching monitors:', error);
    return;
  }
  console.log('Monitors:', monitors);

  // Create a new HTTP monitor
  const created = await monitorCreate({
    body: {
      name: 'Production API',
      url: 'https://api.example.com/health',
      interval: 60,
      timeout: 10,
    },
  });
  console.log('Created monitor:', created.data);
}

main();
```

### 2. High-Throughput Ingestion (Pings, Logs & Metrics)

The SDK provides high-performance ingestion helpers for your background workers, servers, and scripts:

```typescript
import { heartbeatPing, collectLogs, collectMetrics } from 'upassist/ingest';

// Send a heartbeat ping (zero latency check-in)
await heartbeatPing({
  apiKey: 'up_live_your_api_key_here',
  token: 'my-cron-backup-job',
  status: 'up',
  durationMs: 420,
  message: 'Backup completed successfully',
});

// Stream structured logs
await collectLogs({
  apiKey: 'up_live_your_api_key_here',
  service: 'payment-gateway',
  logs: [
    {
      level: 'INFO',
      message: 'Processing checkout session',
      context: { orderId: 'ord_12345', amount: 99.00 },
      timestamp: new Date().toISOString(),
    },
  ],
});

// Collect custom metrics
await collectMetrics({
  apiKey: 'up_live_your_api_key_here',
  metrics: [
    {
      name: 'checkout_duration_ms',
      value: 142.5,
      type: 'gauge',
      labels: { environment: 'production' },
    },
  ],
});
```

## Features

- **Full Resource Coverage**: Monitors, Heartbeats, Incidents, Maintenance Windows, Escalation Policies, Error Tracking Apps & Issues, Status Pages & Subscribers, Dashboards, Team Members, API Keys, Logs, Metrics, Radar, Integrations, and more.
- **Dual ESM & CommonJS**: Works out-of-the-box in modern Node.js, Bun, Deno, Next.js, Vite, and legacy CJS projects.
- **Strict TypeScript Types**: Generated directly from Upassist OpenAPI 3.1 specifications.

## License

MIT
