import type { Client, ClientMeta, Options as Options2, RequestResult, TDataShape } from './client';
import type { ApiKeyCreateData, ApiKeyCreateErrors, ApiKeyCreateResponses, ApiKeyDeleteData, ApiKeyDeleteErrors, ApiKeyDeleteResponses, ApiKeyGetData, ApiKeyGetErrors, ApiKeyGetResponses, ApiKeyListData, ApiKeyListErrors, ApiKeyListResponses, ApiKeyUpdateData, ApiKeyUpdateErrors, ApiKeyUpdateResponses, DashboardCreateData, DashboardCreateErrors, DashboardCreateResponses, DashboardDeleteData, DashboardDeleteErrors, DashboardDeleteResponses, DashboardGetData, DashboardGetErrors, DashboardGetResponses, DashboardListData, DashboardListErrors, DashboardListResponses, DashboardUpdateData, DashboardUpdateErrors, DashboardUpdateResponses, ErrorAppCreateData, ErrorAppCreateErrors, ErrorAppCreateResponses, ErrorAppDeleteData, ErrorAppDeleteErrors, ErrorAppDeleteResponses, ErrorAppGetData, ErrorAppGetErrors, ErrorAppGetResponses, ErrorAppIssueDeleteData, ErrorAppIssueDeleteErrors, ErrorAppIssueDeleteResponses, ErrorAppIssueGetData, ErrorAppIssueGetErrors, ErrorAppIssueGetResponses, ErrorAppIssueListData, ErrorAppIssueListErrors, ErrorAppIssueListResponses, ErrorAppIssueUpdateData, ErrorAppIssueUpdateErrors, ErrorAppIssueUpdateResponses, ErrorAppListData, ErrorAppListErrors, ErrorAppListResponses, ErrorAppSdkSetupData, ErrorAppSdkSetupErrors, ErrorAppSdkSetupResponses, ErrorAppTestEventData, ErrorAppTestEventErrors, ErrorAppTestEventResponses, ErrorAppUpdateData, ErrorAppUpdateErrors, ErrorAppUpdateResponses, EscalationPolicyCreateData, EscalationPolicyCreateErrors, EscalationPolicyCreateResponses, EscalationPolicyDeleteData, EscalationPolicyDeleteErrors, EscalationPolicyDeleteResponses, EscalationPolicyGetData, EscalationPolicyGetErrors, EscalationPolicyGetResponses, EscalationPolicyListData, EscalationPolicyListErrors, EscalationPolicyListResponses, EscalationPolicyUpdateData, EscalationPolicyUpdateErrors, EscalationPolicyUpdateResponses, GroupListData, GroupListErrors, GroupListResponses, HeartbeatCreateData, HeartbeatCreateErrors, HeartbeatCreateResponses, HeartbeatDeleteData, HeartbeatDeleteErrors, HeartbeatDeleteResponses, HeartbeatGetData, HeartbeatGetErrors, HeartbeatGetResponses, HeartbeatGroupAssignData, HeartbeatGroupAssignErrors, HeartbeatGroupAssignResponses, HeartbeatGroupListData, HeartbeatGroupListErrors, HeartbeatGroupListResponses, HeartbeatListData, HeartbeatListErrors, HeartbeatListResponses, HeartbeatPauseData, HeartbeatPauseErrors, HeartbeatPauseResponses, HeartbeatTurnOffAlertsData, HeartbeatTurnOffAlertsErrors, HeartbeatTurnOffAlertsResponses, HeartbeatTurnOnAlertsData, HeartbeatTurnOnAlertsErrors, HeartbeatTurnOnAlertsResponses, HeartbeatUnpauseData, HeartbeatUnpauseErrors, HeartbeatUnpauseResponses, HeartbeatUpdateData, HeartbeatUpdateErrors, HeartbeatUpdateResponses, IncidentAcknowledgeData, IncidentAcknowledgeErrors, IncidentAcknowledgeResponses, IncidentCreateData, IncidentCreateErrors, IncidentCreateResponses, IncidentGetData, IncidentGetErrors, IncidentGetResponses, IncidentListData, IncidentListErrors, IncidentListResponses, IncidentResolveData, IncidentResolveErrors, IncidentResolveResponses, IntegrationActivateData, IntegrationActivateErrors, IntegrationActivateResponses, IntegrationCreateData, IntegrationCreateErrors, IntegrationCreateResponses, IntegrationDeactivateData, IntegrationDeactivateErrors, IntegrationDeactivateResponses, IntegrationDeleteData, IntegrationDeleteErrors, IntegrationDeleteResponses, IntegrationGetData, IntegrationGetErrors, IntegrationGetResponses, IntegrationListData, IntegrationListErrors, IntegrationListResponses, IntegrationUpdateData, IntegrationUpdateErrors, IntegrationUpdateResponses, LocationListData, LocationListErrors, LocationListResponses, LogQueryData, LogQueryErrors, LogQueryResponses, MaintenanceCreateData, MaintenanceCreateErrors, MaintenanceCreateResponses, MaintenanceDeleteData, MaintenanceDeleteErrors, MaintenanceDeleteResponses, MaintenanceEndData, MaintenanceEndErrors, MaintenanceEndResponses, MaintenanceGetData, MaintenanceGetErrors, MaintenanceGetResponses, MaintenanceListData, MaintenanceListErrors, MaintenanceListResponses, MaintenanceUpdateData, MaintenanceUpdateErrors, MaintenanceUpdateResponses, MetricListData, MetricListErrors, MetricListResponses, MetricSeriesData, MetricSeriesErrors, MetricSeriesResponses, MetricTagKeysData, MetricTagKeysErrors, MetricTagKeysResponses, MetricTagValuesData, MetricTagValuesErrors, MetricTagValuesResponses, MonitorCreateData, MonitorCreateErrors, MonitorCreateResponses, MonitorDeleteData, MonitorDeleteErrors, MonitorDeleteResponses, MonitorGetData, MonitorGetErrors, MonitorGetResponses, MonitorGroupAssignData, MonitorGroupAssignErrors, MonitorGroupAssignResponses, MonitorGroupListData, MonitorGroupListErrors, MonitorGroupListResponses, MonitorListData, MonitorListErrors, MonitorListResponses, MonitorPauseData, MonitorPauseErrors, MonitorPauseResponses, MonitorTestAlertData, MonitorTestAlertErrors, MonitorTestAlertResponses, MonitorTurnOffAlertsData, MonitorTurnOffAlertsErrors, MonitorTurnOffAlertsResponses, MonitorTurnOnAlertsData, MonitorTurnOnAlertsErrors, MonitorTurnOnAlertsResponses, MonitorUnpauseData, MonitorUnpauseErrors, MonitorUnpauseResponses, MonitorUpdateData, MonitorUpdateErrors, MonitorUpdateResponses, PlatformListData, PlatformListErrors, PlatformListResponses, ProjectGetData, ProjectGetErrors, ProjectGetResponses, ProjectInvitationCreateData, ProjectInvitationCreateErrors, ProjectInvitationCreateResponses, ProjectInvitationDeleteData, ProjectInvitationDeleteErrors, ProjectInvitationDeleteResponses, ProjectInvitationListData, ProjectInvitationListErrors, ProjectInvitationListResponses, ProjectMemberDeleteData, ProjectMemberDeleteErrors, ProjectMemberDeleteResponses, ProjectMemberListData, ProjectMemberListErrors, ProjectMemberListResponses, RadarPageCreateData, RadarPageCreateErrors, RadarPageCreateResponses, RadarPageDeleteData, RadarPageDeleteErrors, RadarPageDeleteResponses, RadarPageListData, RadarPageListErrors, RadarPageListResponses, RadarSettingsGetData, RadarSettingsGetErrors, RadarSettingsGetResponses, RadarSettingsUpdateData, RadarSettingsUpdateErrors, RadarSettingsUpdateResponses, SiteCreateData, SiteCreateErrors, SiteCreateResponses, SiteDeleteData, SiteDeleteErrors, SiteDeleteResponses, SiteGetData, SiteGetErrors, SiteGetResponses, SiteGroupAssignData, SiteGroupAssignErrors, SiteGroupAssignResponses, SiteGroupListData, SiteGroupListErrors, SiteGroupListResponses, SiteListData, SiteListErrors, SiteListResponses, SiteUpdateData, SiteUpdateErrors, SiteUpdateResponses, SourceCreateData, SourceCreateErrors, SourceCreateResponses, SourceDeleteData, SourceDeleteErrors, SourceDeleteResponses, SourceGetData, SourceGetErrors, SourceGetResponses, SourceListData, SourceListErrors, SourceListResponses, SourcePauseData, SourcePauseErrors, SourcePauseResponses, SourceUnpauseData, SourceUnpauseErrors, SourceUnpauseResponses, SourceUpdateData, SourceUpdateErrors, SourceUpdateResponses, StatusPageCreateData, StatusPageCreateErrors, StatusPageCreateResponses, StatusPageDeleteData, StatusPageDeleteErrors, StatusPageDeleteResponses, StatusPageGetData, StatusPageGetErrors, StatusPageGetResponses, StatusPageListData, StatusPageListErrors, StatusPageListResponses, StatusPageReportCreateData, StatusPageReportCreateErrors, StatusPageReportCreateResponses, StatusPageReportDeleteData, StatusPageReportDeleteErrors, StatusPageReportDeleteResponses, StatusPageReportGetData, StatusPageReportGetErrors, StatusPageReportGetResponses, StatusPageReportListData, StatusPageReportListErrors, StatusPageReportListResponses, StatusPageSectionCreateData, StatusPageSectionCreateErrors, StatusPageSectionCreateResponses, StatusPageSectionDeleteData, StatusPageSectionDeleteErrors, StatusPageSectionDeleteResponses, StatusPageSectionListData, StatusPageSectionListErrors, StatusPageSectionListResponses, StatusPageSectionUpdateData, StatusPageSectionUpdateErrors, StatusPageSectionUpdateResponses, StatusPageSubscriberCreateData, StatusPageSubscriberCreateErrors, StatusPageSubscriberCreateResponses, StatusPageSubscriberDeleteData, StatusPageSubscriberDeleteErrors, StatusPageSubscriberDeleteResponses, StatusPageSubscriberListData, StatusPageSubscriberListErrors, StatusPageSubscriberListResponses, StatusPageUpdateData, StatusPageUpdateErrors, StatusPageUpdateResponses, TagListData, TagListErrors, TagListResponses } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown> = Options2<TData, ThrowOnError, TResponse> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: keyof ClientMeta extends never ? Record<string, unknown> : ClientMeta;
};
/**
 * ListHeartbeats
 */
export declare const heartbeatList: <ThrowOnError extends boolean = false>(options?: Options<HeartbeatListData, ThrowOnError>) => RequestResult<HeartbeatListResponses, HeartbeatListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const heartbeatCreate: <ThrowOnError extends boolean = false>(options: Options<HeartbeatCreateData, ThrowOnError>) => RequestResult<HeartbeatCreateResponses, HeartbeatCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 */
export declare const heartbeatDelete: <ThrowOnError extends boolean = false>(options: Options<HeartbeatDeleteData, ThrowOnError>) => RequestResult<HeartbeatDeleteResponses, HeartbeatDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const heartbeatGet: <ThrowOnError extends boolean = false>(options: Options<HeartbeatGetData, ThrowOnError>) => RequestResult<HeartbeatGetResponses, HeartbeatGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const heartbeatUpdate: <ThrowOnError extends boolean = false>(options: Options<HeartbeatUpdateData, ThrowOnError>) => RequestResult<HeartbeatUpdateResponses, HeartbeatUpdateErrors, ThrowOnError>;
/**
 * Pause
 */
export declare const heartbeatPause: <ThrowOnError extends boolean = false>(options: Options<HeartbeatPauseData, ThrowOnError>) => RequestResult<HeartbeatPauseResponses, HeartbeatPauseErrors, ThrowOnError>;
/**
 * TurnOffAlerts
 */
export declare const heartbeatTurnOffAlerts: <ThrowOnError extends boolean = false>(options: Options<HeartbeatTurnOffAlertsData, ThrowOnError>) => RequestResult<HeartbeatTurnOffAlertsResponses, HeartbeatTurnOffAlertsErrors, ThrowOnError>;
/**
 * TurnOnAlerts
 */
export declare const heartbeatTurnOnAlerts: <ThrowOnError extends boolean = false>(options: Options<HeartbeatTurnOnAlertsData, ThrowOnError>) => RequestResult<HeartbeatTurnOnAlertsResponses, HeartbeatTurnOnAlertsErrors, ThrowOnError>;
/**
 * Unpause
 */
export declare const heartbeatUnpause: <ThrowOnError extends boolean = false>(options: Options<HeartbeatUnpauseData, ThrowOnError>) => RequestResult<HeartbeatUnpauseResponses, HeartbeatUnpauseErrors, ThrowOnError>;
/**
 * ListGroups
 */
export declare const heartbeatGroupList: <ThrowOnError extends boolean = false>(options?: Options<HeartbeatGroupListData, ThrowOnError>) => RequestResult<HeartbeatGroupListResponses, HeartbeatGroupListErrors, ThrowOnError>;
/**
 * Assign
 */
export declare const heartbeatGroupAssign: <ThrowOnError extends boolean = false>(options: Options<HeartbeatGroupAssignData, ThrowOnError>) => RequestResult<HeartbeatGroupAssignResponses, HeartbeatGroupAssignErrors, ThrowOnError>;
/**
 * ListMonitors
 */
export declare const monitorList: <ThrowOnError extends boolean = false>(options?: Options<MonitorListData, ThrowOnError>) => RequestResult<MonitorListResponses, MonitorListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const monitorCreate: <ThrowOnError extends boolean = false>(options: Options<MonitorCreateData, ThrowOnError>) => RequestResult<MonitorCreateResponses, MonitorCreateErrors, ThrowOnError>;
/**
 * DeleteMonitor
 */
export declare const monitorDelete: <ThrowOnError extends boolean = false>(options: Options<MonitorDeleteData, ThrowOnError>) => RequestResult<MonitorDeleteResponses, MonitorDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const monitorGet: <ThrowOnError extends boolean = false>(options: Options<MonitorGetData, ThrowOnError>) => RequestResult<MonitorGetResponses, MonitorGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const monitorUpdate: <ThrowOnError extends boolean = false>(options: Options<MonitorUpdateData, ThrowOnError>) => RequestResult<MonitorUpdateResponses, MonitorUpdateErrors, ThrowOnError>;
/**
 * Pause
 */
export declare const monitorPause: <ThrowOnError extends boolean = false>(options: Options<MonitorPauseData, ThrowOnError>) => RequestResult<MonitorPauseResponses, MonitorPauseErrors, ThrowOnError>;
/**
 * SendTestAlert
 */
export declare const monitorTestAlert: <ThrowOnError extends boolean = false>(options: Options<MonitorTestAlertData, ThrowOnError>) => RequestResult<MonitorTestAlertResponses, MonitorTestAlertErrors, ThrowOnError>;
/**
 * TurnOffAlerts
 */
export declare const monitorTurnOffAlerts: <ThrowOnError extends boolean = false>(options: Options<MonitorTurnOffAlertsData, ThrowOnError>) => RequestResult<MonitorTurnOffAlertsResponses, MonitorTurnOffAlertsErrors, ThrowOnError>;
/**
 * TurnOnAlerts
 */
export declare const monitorTurnOnAlerts: <ThrowOnError extends boolean = false>(options: Options<MonitorTurnOnAlertsData, ThrowOnError>) => RequestResult<MonitorTurnOnAlertsResponses, MonitorTurnOnAlertsErrors, ThrowOnError>;
/**
 * Unpause
 */
export declare const monitorUnpause: <ThrowOnError extends boolean = false>(options: Options<MonitorUnpauseData, ThrowOnError>) => RequestResult<MonitorUnpauseResponses, MonitorUnpauseErrors, ThrowOnError>;
/**
 * ListGroups
 */
export declare const monitorGroupList: <ThrowOnError extends boolean = false>(options?: Options<MonitorGroupListData, ThrowOnError>) => RequestResult<MonitorGroupListResponses, MonitorGroupListErrors, ThrowOnError>;
/**
 * Assign
 */
export declare const monitorGroupAssign: <ThrowOnError extends boolean = false>(options: Options<MonitorGroupAssignData, ThrowOnError>) => RequestResult<MonitorGroupAssignResponses, MonitorGroupAssignErrors, ThrowOnError>;
/**
 * Acknowledge
 */
export declare const incidentAcknowledge: <ThrowOnError extends boolean = false>(options: Options<IncidentAcknowledgeData, ThrowOnError>) => RequestResult<IncidentAcknowledgeResponses, IncidentAcknowledgeErrors, ThrowOnError>;
/**
 * ListIncidents
 */
export declare const incidentList: <ThrowOnError extends boolean = false>(options?: Options<IncidentListData, ThrowOnError>) => RequestResult<IncidentListResponses, IncidentListErrors, ThrowOnError>;
/**
 * CreateIncident
 */
export declare const incidentCreate: <ThrowOnError extends boolean = false>(options: Options<IncidentCreateData, ThrowOnError>) => RequestResult<IncidentCreateResponses, IncidentCreateErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const incidentGet: <ThrowOnError extends boolean = false>(options: Options<IncidentGetData, ThrowOnError>) => RequestResult<IncidentGetResponses, IncidentGetErrors, ThrowOnError>;
/**
 * Resolve
 */
export declare const incidentResolve: <ThrowOnError extends boolean = false>(options: Options<IncidentResolveData, ThrowOnError>) => RequestResult<IncidentResolveResponses, IncidentResolveErrors, ThrowOnError>;
/**
 * ListSites
 */
export declare const siteList: <ThrowOnError extends boolean = false>(options?: Options<SiteListData, ThrowOnError>) => RequestResult<SiteListResponses, SiteListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const siteCreate: <ThrowOnError extends boolean = false>(options: Options<SiteCreateData, ThrowOnError>) => RequestResult<SiteCreateResponses, SiteCreateErrors, ThrowOnError>;
/**
 * DeleteSite
 */
export declare const siteDelete: <ThrowOnError extends boolean = false>(options: Options<SiteDeleteData, ThrowOnError>) => RequestResult<SiteDeleteResponses, SiteDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const siteGet: <ThrowOnError extends boolean = false>(options: Options<SiteGetData, ThrowOnError>) => RequestResult<SiteGetResponses, SiteGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const siteUpdate: <ThrowOnError extends boolean = false>(options: Options<SiteUpdateData, ThrowOnError>) => RequestResult<SiteUpdateResponses, SiteUpdateErrors, ThrowOnError>;
/**
 * ListGroups
 */
export declare const siteGroupList: <ThrowOnError extends boolean = false>(options?: Options<SiteGroupListData, ThrowOnError>) => RequestResult<SiteGroupListResponses, SiteGroupListErrors, ThrowOnError>;
/**
 * Assign
 */
export declare const siteGroupAssign: <ThrowOnError extends boolean = false>(options: Options<SiteGroupAssignData, ThrowOnError>) => RequestResult<SiteGroupAssignResponses, SiteGroupAssignErrors, ThrowOnError>;
/**
 * ListSources
 */
export declare const sourceList: <ThrowOnError extends boolean = false>(options?: Options<SourceListData, ThrowOnError>) => RequestResult<SourceListResponses, SourceListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const sourceCreate: <ThrowOnError extends boolean = false>(options: Options<SourceCreateData, ThrowOnError>) => RequestResult<SourceCreateResponses, SourceCreateErrors, ThrowOnError>;
/**
 * DeleteSource
 */
export declare const sourceDelete: <ThrowOnError extends boolean = false>(options: Options<SourceDeleteData, ThrowOnError>) => RequestResult<SourceDeleteResponses, SourceDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const sourceGet: <ThrowOnError extends boolean = false>(options: Options<SourceGetData, ThrowOnError>) => RequestResult<SourceGetResponses, SourceGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const sourceUpdate: <ThrowOnError extends boolean = false>(options: Options<SourceUpdateData, ThrowOnError>) => RequestResult<SourceUpdateResponses, SourceUpdateErrors, ThrowOnError>;
/**
 * Pause
 */
export declare const sourcePause: <ThrowOnError extends boolean = false>(options: Options<SourcePauseData, ThrowOnError>) => RequestResult<SourcePauseResponses, SourcePauseErrors, ThrowOnError>;
/**
 * Unpause
 */
export declare const sourceUnpause: <ThrowOnError extends boolean = false>(options: Options<SourceUnpauseData, ThrowOnError>) => RequestResult<SourceUnpauseResponses, SourceUnpauseErrors, ThrowOnError>;
/**
 * Query
 */
export declare const logQuery: <ThrowOnError extends boolean = false>(options: Options<LogQueryData, ThrowOnError>) => RequestResult<LogQueryResponses, LogQueryErrors, ThrowOnError>;
/**
 * ListMetrics
 */
export declare const metricList: <ThrowOnError extends boolean = false>(options: Options<MetricListData, ThrowOnError>) => RequestResult<MetricListResponses, MetricListErrors, ThrowOnError>;
/**
 * ListSeries
 */
export declare const metricSeries: <ThrowOnError extends boolean = false>(options: Options<MetricSeriesData, ThrowOnError>) => RequestResult<MetricSeriesResponses, MetricSeriesErrors, ThrowOnError>;
/**
 * ListTagKeys
 */
export declare const metricTagKeys: <ThrowOnError extends boolean = false>(options: Options<MetricTagKeysData, ThrowOnError>) => RequestResult<MetricTagKeysResponses, MetricTagKeysErrors, ThrowOnError>;
/**
 * ListTagValues
 */
export declare const metricTagValues: <ThrowOnError extends boolean = false>(options: Options<MetricTagValuesData, ThrowOnError>) => RequestResult<MetricTagValuesResponses, MetricTagValuesErrors, ThrowOnError>;
/**
 * ListPages
 */
export declare const radarPageList: <ThrowOnError extends boolean = false>(options?: Options<RadarPageListData, ThrowOnError>) => RequestResult<RadarPageListResponses, RadarPageListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const radarPageCreate: <ThrowOnError extends boolean = false>(options: Options<RadarPageCreateData, ThrowOnError>) => RequestResult<RadarPageCreateResponses, RadarPageCreateErrors, ThrowOnError>;
/**
 * DeletePage
 */
export declare const radarPageDelete: <ThrowOnError extends boolean = false>(options: Options<RadarPageDeleteData, ThrowOnError>) => RequestResult<RadarPageDeleteResponses, RadarPageDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const radarSettingsGet: <ThrowOnError extends boolean = false>(options?: Options<RadarSettingsGetData, ThrowOnError>) => RequestResult<RadarSettingsGetResponses, RadarSettingsGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const radarSettingsUpdate: <ThrowOnError extends boolean = false>(options: Options<RadarSettingsUpdateData, ThrowOnError>) => RequestResult<RadarSettingsUpdateResponses, RadarSettingsUpdateErrors, ThrowOnError>;
/**
 * ListGroups
 */
export declare const groupList: <ThrowOnError extends boolean = false>(options?: Options<GroupListData, ThrowOnError>) => RequestResult<GroupListResponses, GroupListErrors, ThrowOnError>;
/**
 * ListTags
 */
export declare const tagList: <ThrowOnError extends boolean = false>(options?: Options<TagListData, ThrowOnError>) => RequestResult<TagListResponses, TagListErrors, ThrowOnError>;
/**
 * ListStatusPages
 */
export declare const statusPageList: <ThrowOnError extends boolean = false>(options?: Options<StatusPageListData, ThrowOnError>) => RequestResult<StatusPageListResponses, StatusPageListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const statusPageCreate: <ThrowOnError extends boolean = false>(options: Options<StatusPageCreateData, ThrowOnError>) => RequestResult<StatusPageCreateResponses, StatusPageCreateErrors, ThrowOnError>;
/**
 * DeleteStatusPage
 */
export declare const statusPageDelete: <ThrowOnError extends boolean = false>(options: Options<StatusPageDeleteData, ThrowOnError>) => RequestResult<StatusPageDeleteResponses, StatusPageDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const statusPageGet: <ThrowOnError extends boolean = false>(options: Options<StatusPageGetData, ThrowOnError>) => RequestResult<StatusPageGetResponses, StatusPageGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const statusPageUpdate: <ThrowOnError extends boolean = false>(options: Options<StatusPageUpdateData, ThrowOnError>) => RequestResult<StatusPageUpdateResponses, StatusPageUpdateErrors, ThrowOnError>;
/**
 * ListSections
 *
 * List all sections on the status page along with attached resources.
 */
export declare const statusPageSectionList: <ThrowOnError extends boolean = false>(options: Options<StatusPageSectionListData, ThrowOnError>) => RequestResult<StatusPageSectionListResponses, StatusPageSectionListErrors, ThrowOnError>;
/**
 * Create
 *
 * Create a new section on a status page.
 */
export declare const statusPageSectionCreate: <ThrowOnError extends boolean = false>(options: Options<StatusPageSectionCreateData, ThrowOnError>) => RequestResult<StatusPageSectionCreateResponses, StatusPageSectionCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 *
 * Delete a section from a status page.
 */
export declare const statusPageSectionDelete: <ThrowOnError extends boolean = false>(options: Options<StatusPageSectionDeleteData, ThrowOnError>) => RequestResult<StatusPageSectionDeleteResponses, StatusPageSectionDeleteErrors, ThrowOnError>;
/**
 * Update
 *
 * Update a status page section.
 */
export declare const statusPageSectionUpdate: <ThrowOnError extends boolean = false>(options: Options<StatusPageSectionUpdateData, ThrowOnError>) => RequestResult<StatusPageSectionUpdateResponses, StatusPageSectionUpdateErrors, ThrowOnError>;
/**
 * ListReports
 *
 * List active and historical status reports for a status page.
 */
export declare const statusPageReportList: <ThrowOnError extends boolean = false>(options: Options<StatusPageReportListData, ThrowOnError>) => RequestResult<StatusPageReportListResponses, StatusPageReportListErrors, ThrowOnError>;
/**
 * Create
 *
 * Publish a new status announcement or incident report.
 */
export declare const statusPageReportCreate: <ThrowOnError extends boolean = false>(options: Options<StatusPageReportCreateData, ThrowOnError>) => RequestResult<StatusPageReportCreateResponses, StatusPageReportCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 *
 * Delete a status report.
 */
export declare const statusPageReportDelete: <ThrowOnError extends boolean = false>(options: Options<StatusPageReportDeleteData, ThrowOnError>) => RequestResult<StatusPageReportDeleteResponses, StatusPageReportDeleteErrors, ThrowOnError>;
/**
 * Detail
 *
 * Get details of a specific status report.
 */
export declare const statusPageReportGet: <ThrowOnError extends boolean = false>(options: Options<StatusPageReportGetData, ThrowOnError>) => RequestResult<StatusPageReportGetResponses, StatusPageReportGetErrors, ThrowOnError>;
/**
 * ListSubscribers
 *
 * List active email subscribers for this status page.
 *
 * Requires status-page:read scope.
 */
export declare const statusPageSubscriberList: <ThrowOnError extends boolean = false>(options: Options<StatusPageSubscriberListData, ThrowOnError>) => RequestResult<StatusPageSubscriberListResponses, StatusPageSubscriberListErrors, ThrowOnError>;
/**
 * Create
 *
 * Subscribe an email address to status updates.
 *
 * Requires status-page:write scope.
 */
export declare const statusPageSubscriberCreate: <ThrowOnError extends boolean = false>(options: Options<StatusPageSubscriberCreateData, ThrowOnError>) => RequestResult<StatusPageSubscriberCreateResponses, StatusPageSubscriberCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 *
 * Unsubscribe an email address from status updates.
 *
 * Requires status-page:write scope.
 */
export declare const statusPageSubscriberDelete: <ThrowOnError extends boolean = false>(options: Options<StatusPageSubscriberDeleteData, ThrowOnError>) => RequestResult<StatusPageSubscriberDeleteResponses, StatusPageSubscriberDeleteErrors, ThrowOnError>;
/**
 * Activate
 */
export declare const integrationActivate: <ThrowOnError extends boolean = false>(options: Options<IntegrationActivateData, ThrowOnError>) => RequestResult<IntegrationActivateResponses, IntegrationActivateErrors, ThrowOnError>;
/**
 * ListIntegrations
 */
export declare const integrationList: <ThrowOnError extends boolean = false>(options?: Options<IntegrationListData, ThrowOnError>) => RequestResult<IntegrationListResponses, IntegrationListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const integrationCreate: <ThrowOnError extends boolean = false>(options: Options<IntegrationCreateData, ThrowOnError>) => RequestResult<IntegrationCreateResponses, IntegrationCreateErrors, ThrowOnError>;
/**
 * Deactivate
 */
export declare const integrationDeactivate: <ThrowOnError extends boolean = false>(options: Options<IntegrationDeactivateData, ThrowOnError>) => RequestResult<IntegrationDeactivateResponses, IntegrationDeactivateErrors, ThrowOnError>;
/**
 * DeleteIntegration
 */
export declare const integrationDelete: <ThrowOnError extends boolean = false>(options: Options<IntegrationDeleteData, ThrowOnError>) => RequestResult<IntegrationDeleteResponses, IntegrationDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const integrationGet: <ThrowOnError extends boolean = false>(options: Options<IntegrationGetData, ThrowOnError>) => RequestResult<IntegrationGetResponses, IntegrationGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const integrationUpdate: <ThrowOnError extends boolean = false>(options: Options<IntegrationUpdateData, ThrowOnError>) => RequestResult<IntegrationUpdateResponses, IntegrationUpdateErrors, ThrowOnError>;
/**
 * ListMaintenance
 */
export declare const maintenanceList: <ThrowOnError extends boolean = false>(options?: Options<MaintenanceListData, ThrowOnError>) => RequestResult<MaintenanceListResponses, MaintenanceListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const maintenanceCreate: <ThrowOnError extends boolean = false>(options: Options<MaintenanceCreateData, ThrowOnError>) => RequestResult<MaintenanceCreateResponses, MaintenanceCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 */
export declare const maintenanceDelete: <ThrowOnError extends boolean = false>(options: Options<MaintenanceDeleteData, ThrowOnError>) => RequestResult<MaintenanceDeleteResponses, MaintenanceDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const maintenanceGet: <ThrowOnError extends boolean = false>(options: Options<MaintenanceGetData, ThrowOnError>) => RequestResult<MaintenanceGetResponses, MaintenanceGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const maintenanceUpdate: <ThrowOnError extends boolean = false>(options: Options<MaintenanceUpdateData, ThrowOnError>) => RequestResult<MaintenanceUpdateResponses, MaintenanceUpdateErrors, ThrowOnError>;
/**
 * End
 */
export declare const maintenanceEnd: <ThrowOnError extends boolean = false>(options: Options<MaintenanceEndData, ThrowOnError>) => RequestResult<MaintenanceEndResponses, MaintenanceEndErrors, ThrowOnError>;
/**
 * ListLocations
 */
export declare const locationList: <ThrowOnError extends boolean = false>(options?: Options<LocationListData, ThrowOnError>) => RequestResult<LocationListResponses, LocationListErrors, ThrowOnError>;
/**
 * ListPlatforms
 */
export declare const platformList: <ThrowOnError extends boolean = false>(options?: Options<PlatformListData, ThrowOnError>) => RequestResult<PlatformListResponses, PlatformListErrors, ThrowOnError>;
/**
 * ListPolicies
 */
export declare const escalationPolicyList: <ThrowOnError extends boolean = false>(options?: Options<EscalationPolicyListData, ThrowOnError>) => RequestResult<EscalationPolicyListResponses, EscalationPolicyListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const escalationPolicyCreate: <ThrowOnError extends boolean = false>(options: Options<EscalationPolicyCreateData, ThrowOnError>) => RequestResult<EscalationPolicyCreateResponses, EscalationPolicyCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 */
export declare const escalationPolicyDelete: <ThrowOnError extends boolean = false>(options: Options<EscalationPolicyDeleteData, ThrowOnError>) => RequestResult<EscalationPolicyDeleteResponses, EscalationPolicyDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const escalationPolicyGet: <ThrowOnError extends boolean = false>(options: Options<EscalationPolicyGetData, ThrowOnError>) => RequestResult<EscalationPolicyGetResponses, EscalationPolicyGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const escalationPolicyUpdate: <ThrowOnError extends boolean = false>(options: Options<EscalationPolicyUpdateData, ThrowOnError>) => RequestResult<EscalationPolicyUpdateResponses, EscalationPolicyUpdateErrors, ThrowOnError>;
/**
 * ListErrorApps
 */
export declare const errorAppList: <ThrowOnError extends boolean = false>(options?: Options<ErrorAppListData, ThrowOnError>) => RequestResult<ErrorAppListResponses, ErrorAppListErrors, ThrowOnError>;
/**
 * Create
 */
export declare const errorAppCreate: <ThrowOnError extends boolean = false>(options: Options<ErrorAppCreateData, ThrowOnError>) => RequestResult<ErrorAppCreateResponses, ErrorAppCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 */
export declare const errorAppDelete: <ThrowOnError extends boolean = false>(options: Options<ErrorAppDeleteData, ThrowOnError>) => RequestResult<ErrorAppDeleteResponses, ErrorAppDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const errorAppGet: <ThrowOnError extends boolean = false>(options: Options<ErrorAppGetData, ThrowOnError>) => RequestResult<ErrorAppGetResponses, ErrorAppGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const errorAppUpdate: <ThrowOnError extends boolean = false>(options: Options<ErrorAppUpdateData, ThrowOnError>) => RequestResult<ErrorAppUpdateResponses, ErrorAppUpdateErrors, ThrowOnError>;
/**
 * SdkSetup
 */
export declare const errorAppSdkSetup: <ThrowOnError extends boolean = false>(options: Options<ErrorAppSdkSetupData, ThrowOnError>) => RequestResult<ErrorAppSdkSetupResponses, ErrorAppSdkSetupErrors, ThrowOnError>;
/**
 * SendTestEvent
 */
export declare const errorAppTestEvent: <ThrowOnError extends boolean = false>(options: Options<ErrorAppTestEventData, ThrowOnError>) => RequestResult<ErrorAppTestEventResponses, ErrorAppTestEventErrors, ThrowOnError>;
/**
 * DeleteIssue
 */
export declare const errorAppIssueDelete: <ThrowOnError extends boolean = false>(options: Options<ErrorAppIssueDeleteData, ThrowOnError>) => RequestResult<ErrorAppIssueDeleteResponses, ErrorAppIssueDeleteErrors, ThrowOnError>;
/**
 * Detail
 */
export declare const errorAppIssueGet: <ThrowOnError extends boolean = false>(options: Options<ErrorAppIssueGetData, ThrowOnError>) => RequestResult<ErrorAppIssueGetResponses, ErrorAppIssueGetErrors, ThrowOnError>;
/**
 * Update
 */
export declare const errorAppIssueUpdate: <ThrowOnError extends boolean = false>(options: Options<ErrorAppIssueUpdateData, ThrowOnError>) => RequestResult<ErrorAppIssueUpdateResponses, ErrorAppIssueUpdateErrors, ThrowOnError>;
/**
 * ListIssues
 */
export declare const errorAppIssueList: <ThrowOnError extends boolean = false>(options: Options<ErrorAppIssueListData, ThrowOnError>) => RequestResult<ErrorAppIssueListResponses, ErrorAppIssueListErrors, ThrowOnError>;
/**
 * GetProject
 *
 * Return authenticated project metadata, active plan, and resource usage.
 *
 * Requires project:read scope.
 */
export declare const projectGet: <ThrowOnError extends boolean = false>(options?: Options<ProjectGetData, ThrowOnError>) => RequestResult<ProjectGetResponses, ProjectGetErrors, ThrowOnError>;
/**
 * DeleteMember
 *
 * Remove a member from the project.
 *
 * Requires member:write scope. Cannot remove the project owner.
 */
export declare const projectMemberDelete: <ThrowOnError extends boolean = false>(options: Options<ProjectMemberDeleteData, ThrowOnError>) => RequestResult<ProjectMemberDeleteResponses, ProjectMemberDeleteErrors, ThrowOnError>;
/**
 * ListMembers
 *
 * List all team members who have access to this project.
 *
 * Requires member:read scope.
 */
export declare const projectMemberList: <ThrowOnError extends boolean = false>(options?: Options<ProjectMemberListData, ThrowOnError>) => RequestResult<ProjectMemberListResponses, ProjectMemberListErrors, ThrowOnError>;
/**
 * ListInvitations
 *
 * List pending email invitations for this project.
 *
 * Requires member:read scope.
 */
export declare const projectInvitationList: <ThrowOnError extends boolean = false>(options?: Options<ProjectInvitationListData, ThrowOnError>) => RequestResult<ProjectInvitationListResponses, ProjectInvitationListErrors, ThrowOnError>;
/**
 * Create
 *
 * Invite a new team member by email.
 *
 * Requires member:write scope.
 */
export declare const projectInvitationCreate: <ThrowOnError extends boolean = false>(options: Options<ProjectInvitationCreateData, ThrowOnError>) => RequestResult<ProjectInvitationCreateResponses, ProjectInvitationCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 *
 * Revoke a pending project invitation.
 *
 * Requires member:write scope.
 */
export declare const projectInvitationDelete: <ThrowOnError extends boolean = false>(options: Options<ProjectInvitationDeleteData, ThrowOnError>) => RequestResult<ProjectInvitationDeleteResponses, ProjectInvitationDeleteErrors, ThrowOnError>;
/**
 * ListApiKeys
 *
 * List active API keys in the project with scopes and creation dates.
 *
 * Requires api-key:read scope.
 */
export declare const apiKeyList: <ThrowOnError extends boolean = false>(options?: Options<ApiKeyListData, ThrowOnError>) => RequestResult<ApiKeyListResponses, ApiKeyListErrors, ThrowOnError>;
/**
 * Create
 *
 * Create a new API key with configured scope boundaries.
 *
 * Requires api-key:write scope.
 */
export declare const apiKeyCreate: <ThrowOnError extends boolean = false>(options: Options<ApiKeyCreateData, ThrowOnError>) => RequestResult<ApiKeyCreateResponses, ApiKeyCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 *
 * Revoke and permanently delete an API key.
 *
 * Requires api-key:write scope.
 */
export declare const apiKeyDelete: <ThrowOnError extends boolean = false>(options: Options<ApiKeyDeleteData, ThrowOnError>) => RequestResult<ApiKeyDeleteResponses, ApiKeyDeleteErrors, ThrowOnError>;
/**
 * Detail
 *
 * Retrieve details and scopes for a specific API key.
 *
 * Requires api-key:read scope.
 */
export declare const apiKeyGet: <ThrowOnError extends boolean = false>(options: Options<ApiKeyGetData, ThrowOnError>) => RequestResult<ApiKeyGetResponses, ApiKeyGetErrors, ThrowOnError>;
/**
 * Update
 *
 * Update API key name or scope grants.
 *
 * Requires api-key:write scope.
 */
export declare const apiKeyUpdate: <ThrowOnError extends boolean = false>(options: Options<ApiKeyUpdateData, ThrowOnError>) => RequestResult<ApiKeyUpdateResponses, ApiKeyUpdateErrors, ThrowOnError>;
/**
 * ListDashboards
 *
 * List project dashboards.
 *
 * Requires dashboard:read scope.
 */
export declare const dashboardList: <ThrowOnError extends boolean = false>(options?: Options<DashboardListData, ThrowOnError>) => RequestResult<DashboardListResponses, DashboardListErrors, ThrowOnError>;
/**
 * Create
 *
 * Create a new dashboard.
 *
 * Requires dashboard:write scope.
 */
export declare const dashboardCreate: <ThrowOnError extends boolean = false>(options: Options<DashboardCreateData, ThrowOnError>) => RequestResult<DashboardCreateResponses, DashboardCreateErrors, ThrowOnError>;
/**
 * DeleteDetail
 *
 * Delete a dashboard.
 *
 * Requires dashboard:write scope.
 */
export declare const dashboardDelete: <ThrowOnError extends boolean = false>(options: Options<DashboardDeleteData, ThrowOnError>) => RequestResult<DashboardDeleteResponses, DashboardDeleteErrors, ThrowOnError>;
/**
 * Detail
 *
 * Get full details of a dashboard with its sections, charts, and queries.
 *
 * Requires dashboard:read scope.
 */
export declare const dashboardGet: <ThrowOnError extends boolean = false>(options: Options<DashboardGetData, ThrowOnError>) => RequestResult<DashboardGetResponses, DashboardGetErrors, ThrowOnError>;
/**
 * Update
 *
 * Update dashboard attributes.
 *
 * Requires dashboard:write scope.
 */
export declare const dashboardUpdate: <ThrowOnError extends boolean = false>(options: Options<DashboardUpdateData, ThrowOnError>) => RequestResult<DashboardUpdateResponses, DashboardUpdateErrors, ThrowOnError>;
//# sourceMappingURL=sdk.gen.d.ts.map