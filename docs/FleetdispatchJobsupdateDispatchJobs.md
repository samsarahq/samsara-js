# SamsaraApi.FleetdispatchJobsupdateDispatchJobs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** |  | [optional] 
**externalIdentifier** | **String** |  | [optional] 
**driverId** | **Integer** |  | [optional] 
**vehicleId** | **Integer** |  | [optional] 
**jobState** | **String** |  | [optional] 
**scheduledArrivalTimeMs** | **Integer** |  | [optional] 
**startedAtMs** | **Integer** |  | [optional] 
**completedAtMs** | **Integer** |  | [optional] 
**cancelledAtMs** | **Integer** |  | [optional] 
**notes** | **String** |  | [optional] 
**destinationName** | **String** |  | [optional] 
**destinationAddress** | **String** |  | [optional] 
**destinationLat** | **Number** |  | [optional] 
**destinationLng** | **Number** |  | [optional] 


<a name="JobStateEnum"></a>
## Enum: JobStateEnum


* `Unassigned` (value: `"JobState_Unassigned"`)

* `Assigned` (value: `"JobState_Assigned"`)

* `Started` (value: `"JobState_Started"`)

* `Completed` (value: `"JobState_Completed"`)

* `Cancelled` (value: `"JobState_Cancelled"`)




