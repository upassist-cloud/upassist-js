export declare function heartbeatPing(apiKey: string, slug: string, options?: {
    error?: boolean;
    message?: string;
}): Promise<string>;
export declare function collectLogs(token: string, entries: unknown[]): Promise<string>;
export declare function collectMetrics(token: string, points: unknown[]): Promise<string>;
export declare function trackSiteEvent(event: unknown): Promise<string>;
//# sourceMappingURL=ingest.d.ts.map