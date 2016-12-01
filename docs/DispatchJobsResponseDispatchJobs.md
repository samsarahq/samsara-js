# SamsaraApi.DispatchJobsResponseDispatchJobs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | ID of the Samsara dispatch job to be updated. | [optional] 
**externalIdentifier** | **String** | New&#x3D; string that can be used to map jobs in the Samsara database to jobs in an external database. | [optional] 
**orgId** | **Integer** |  | [optional] 
**groupId** | **Integer** |  | [optional] 
**driverId** | **Integer** | ID of the driver assigned to the dispatch job. | [optional] 
**vehicleId** | **Integer** | ID of the vehicle used for the dispatch job. | [optional] 
**jobState** | **String** | The current state of the dispatch job. | [optional] 
**scheduledArrivalTimeMs** | **Integer** | The time at which the assigned driver is scheduled to arrive at the job destination. | [optional] 
**startedAtMs** | **Integer** | The time at which the assigned driver started fulfilling the job (e.g. started driving to the destination). | [optional] 
**completedAtMs** | **Integer** | The time at which the job was marked complete. | [optional] 
**cancelledAtMs** | **Integer** | The time at which the job was marked cancelled. | [optional] 
**jobCreatedAtMs** | **Integer** | The time at which the job was created. | [optional] 
**notes** | **String** | Notes regarding the details of this job. | [optional] 
**destinationName** | **String** | The name of the job destination. | [optional] 
**destinationAddress** | **String** | The address of the job destination, as it would be recognized if provided to maps.google.com | [optional] 
**destinationLat** | **Number** | Latitude of the destination in decimal degrees. | [optional] 
**destinationLng** | **Number** | Latitude of the destination in decimal degrees. | [optional] 


<a name="JobStateEnum"></a>
## Enum: JobStateEnum


* `Unassigned` (value: `"JobState_Unassigned"`)

* `Assigned` (value: `"JobState_Assigned"`)

* `Started` (value: `"JobState_Started"`)

* `Completed` (value: `"JobState_Completed"`)

* `Cancelled` (value: `"JobState_Cancelled"`)




