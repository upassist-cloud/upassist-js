import {
  client
} from "../chunk-ZPVHKFLP.mjs";

// src/sdk.gen.ts
var heartbeatList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats",
  ...options
});
var heartbeatCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var heartbeatDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats/{heartbeat_slug}",
  ...options
});
var heartbeatGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats/{heartbeat_slug}",
  ...options
});
var heartbeatUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats/{heartbeat_slug}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var heartbeatPause = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats/{heartbeat_slug}/pause",
  ...options
});
var heartbeatTurnOffAlerts = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats/{heartbeat_slug}/turn-off-alerts",
  ...options
});
var heartbeatTurnOnAlerts = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats/{heartbeat_slug}/turn-on-alerts",
  ...options
});
var heartbeatUnpause = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeats/{heartbeat_slug}/unpause",
  ...options
});
var heartbeatGroupList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeat-groups",
  ...options
});
var heartbeatGroupAssign = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/heartbeat-groups",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var monitorList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors",
  ...options
});
var monitorCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var monitorDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}",
  ...options
});
var monitorGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}",
  ...options
});
var monitorUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var monitorPause = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}/pause",
  ...options
});
var monitorTestAlert = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}/test-alert",
  ...options
});
var monitorTurnOffAlerts = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}/turn-off-alerts",
  ...options
});
var monitorTurnOnAlerts = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}/turn-on-alerts",
  ...options
});
var monitorUnpause = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitors/{monitor_id}/unpause",
  ...options
});
var monitorGroupList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitor-groups",
  ...options
});
var monitorGroupAssign = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/monitor-groups",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var incidentAcknowledge = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/incidents/{incident_id}/acknowledge",
  ...options
});
var incidentList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/incidents",
  ...options
});
var incidentCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/incidents",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var incidentGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/incidents/{incident_id}",
  ...options
});
var incidentResolve = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/incidents/{incident_id}/resolve",
  ...options
});
var siteList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sites",
  ...options
});
var siteCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sites",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var siteDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sites/{site_id}",
  ...options
});
var siteGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sites/{site_id}",
  ...options
});
var siteUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sites/{site_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var siteGroupList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/site-groups",
  ...options
});
var siteGroupAssign = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/site-groups",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var sourceList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources",
  ...options
});
var sourceCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var sourceDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}",
  ...options
});
var sourceGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}",
  ...options
});
var sourceUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var sourcePause = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}/pause",
  ...options
});
var sourceUnpause = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}/unpause",
  ...options
});
var logQuery = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/logs",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var metricList = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}/metrics",
  ...options
});
var metricSeries = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}/metrics/series",
  ...options
});
var metricTagKeys = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}/metrics/{metric_name}/tags",
  ...options
});
var metricTagValues = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/sources/{source_id}/metrics/{metric_name}/tag-values",
  ...options
});
var radarPageList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/radar/pages",
  ...options
});
var radarPageCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/radar/pages",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var radarPageDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/radar/pages/{page_id}",
  ...options
});
var radarSettingsGet = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/radar/settings",
  ...options
});
var radarSettingsUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/radar/settings",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var groupList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/groups",
  ...options
});
var tagList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/tags",
  ...options
});
var statusPageList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages",
  ...options
});
var statusPageCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var statusPageDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}",
  ...options
});
var statusPageGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}",
  ...options
});
var statusPageUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var statusPageSectionList = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/sections",
  ...options
});
var statusPageSectionCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/sections",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var statusPageSectionDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/sections/{section_id}",
  ...options
});
var statusPageSectionUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/sections/{section_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var statusPageReportList = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/reports",
  ...options
});
var statusPageReportCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/reports",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var statusPageReportDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/reports/{report_id}",
  ...options
});
var statusPageReportGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/reports/{report_id}",
  ...options
});
var statusPageSubscriberList = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/subscribers",
  ...options
});
var statusPageSubscriberCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/subscribers",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var statusPageSubscriberDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/status-pages/{status_page_id}/subscribers/{subscriber_id}",
  ...options
});
var integrationActivate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/integrations/{integration_id}/activate",
  ...options
});
var integrationList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/integrations",
  ...options
});
var integrationCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/integrations",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var integrationDeactivate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/integrations/{integration_id}/deactivate",
  ...options
});
var integrationDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/integrations/{integration_id}",
  ...options
});
var integrationGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/integrations/{integration_id}",
  ...options
});
var integrationUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/integrations/{integration_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var maintenanceList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/maintenance",
  ...options
});
var maintenanceCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/maintenance",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var maintenanceDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/maintenance/{maintenance_id}",
  ...options
});
var maintenanceGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/maintenance/{maintenance_id}",
  ...options
});
var maintenanceUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/maintenance/{maintenance_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var maintenanceEnd = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/maintenance/{maintenance_id}/end",
  ...options
});
var locationList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/locations",
  ...options
});
var platformList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/platforms",
  ...options
});
var escalationPolicyList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/escalation-policies",
  ...options
});
var escalationPolicyCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/escalation-policies",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var escalationPolicyDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/escalation-policies/{policy_id}",
  ...options
});
var escalationPolicyGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/escalation-policies/{policy_id}",
  ...options
});
var escalationPolicyUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/escalation-policies/{policy_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var errorAppList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps",
  ...options
});
var errorAppCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var errorAppDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}",
  ...options
});
var errorAppGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}",
  ...options
});
var errorAppUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var errorAppSdkSetup = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}/sdk-setup",
  ...options
});
var errorAppTestEvent = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}/test-event",
  ...options
});
var errorAppIssueDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}/issues/{issue_id}",
  ...options
});
var errorAppIssueGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}/issues/{issue_id}",
  ...options
});
var errorAppIssueUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}/issues/{issue_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var errorAppIssueList = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/error-apps/{error_app_id}/issues",
  ...options
});
var projectGet = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/project",
  ...options
});
var projectMemberDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/members/{member_id}",
  ...options
});
var projectMemberList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/members",
  ...options
});
var projectInvitationList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/invitations",
  ...options
});
var projectInvitationCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/invitations",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var projectInvitationDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/invitations/{invitation_id}",
  ...options
});
var apiKeyList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/api-keys",
  ...options
});
var apiKeyCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/api-keys",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var apiKeyDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/api-keys/{api_key_id}",
  ...options
});
var apiKeyGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/api-keys/{api_key_id}",
  ...options
});
var apiKeyUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/api-keys/{api_key_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var dashboardList = (options) => (options?.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/dashboards",
  ...options
});
var dashboardCreate = (options) => (options.client ?? client).post({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/dashboards",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
var dashboardDelete = (options) => (options.client ?? client).delete({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/dashboards/{dashboard_id}",
  ...options
});
var dashboardGet = (options) => (options.client ?? client).get({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/dashboards/{dashboard_id}",
  ...options
});
var dashboardUpdate = (options) => (options.client ?? client).patch({
  security: [{
    key: "projectApiKey",
    scheme: "bearer",
    type: "http"
  }],
  url: "/v1/dashboards/{dashboard_id}",
  ...options,
  headers: {
    "Content-Type": "application/json",
    ...options.headers
  }
});
export {
  apiKeyCreate,
  apiKeyDelete,
  apiKeyGet,
  apiKeyList,
  apiKeyUpdate,
  dashboardCreate,
  dashboardDelete,
  dashboardGet,
  dashboardList,
  dashboardUpdate,
  errorAppCreate,
  errorAppDelete,
  errorAppGet,
  errorAppIssueDelete,
  errorAppIssueGet,
  errorAppIssueList,
  errorAppIssueUpdate,
  errorAppList,
  errorAppSdkSetup,
  errorAppTestEvent,
  errorAppUpdate,
  escalationPolicyCreate,
  escalationPolicyDelete,
  escalationPolicyGet,
  escalationPolicyList,
  escalationPolicyUpdate,
  groupList,
  heartbeatCreate,
  heartbeatDelete,
  heartbeatGet,
  heartbeatGroupAssign,
  heartbeatGroupList,
  heartbeatList,
  heartbeatPause,
  heartbeatTurnOffAlerts,
  heartbeatTurnOnAlerts,
  heartbeatUnpause,
  heartbeatUpdate,
  incidentAcknowledge,
  incidentCreate,
  incidentGet,
  incidentList,
  incidentResolve,
  integrationActivate,
  integrationCreate,
  integrationDeactivate,
  integrationDelete,
  integrationGet,
  integrationList,
  integrationUpdate,
  locationList,
  logQuery,
  maintenanceCreate,
  maintenanceDelete,
  maintenanceEnd,
  maintenanceGet,
  maintenanceList,
  maintenanceUpdate,
  metricList,
  metricSeries,
  metricTagKeys,
  metricTagValues,
  monitorCreate,
  monitorDelete,
  monitorGet,
  monitorGroupAssign,
  monitorGroupList,
  monitorList,
  monitorPause,
  monitorTestAlert,
  monitorTurnOffAlerts,
  monitorTurnOnAlerts,
  monitorUnpause,
  monitorUpdate,
  platformList,
  projectGet,
  projectInvitationCreate,
  projectInvitationDelete,
  projectInvitationList,
  projectMemberDelete,
  projectMemberList,
  radarPageCreate,
  radarPageDelete,
  radarPageList,
  radarSettingsGet,
  radarSettingsUpdate,
  siteCreate,
  siteDelete,
  siteGet,
  siteGroupAssign,
  siteGroupList,
  siteList,
  siteUpdate,
  sourceCreate,
  sourceDelete,
  sourceGet,
  sourceList,
  sourcePause,
  sourceUnpause,
  sourceUpdate,
  statusPageCreate,
  statusPageDelete,
  statusPageGet,
  statusPageList,
  statusPageReportCreate,
  statusPageReportDelete,
  statusPageReportGet,
  statusPageReportList,
  statusPageSectionCreate,
  statusPageSectionDelete,
  statusPageSectionList,
  statusPageSectionUpdate,
  statusPageSubscriberCreate,
  statusPageSubscriberDelete,
  statusPageSubscriberList,
  statusPageUpdate,
  tagList
};
