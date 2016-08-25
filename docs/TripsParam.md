# SamsaraApi.TripsParam

## Properties
Name | Type | Description
------------ | ------------- | -------------
**groupId** | **Integer** | Group ID to query.
**vehicleId** | **Integer** | Vehicle ID to query.
**startMs** | **Integer** | Beginning of the time range, specified in milliseconds UNIX time.
**endMs** | **Integer** | End of the time range, specified in milliseconds UNIX time.

## Example
> var startMs = 1472168300000
> var endMs = 1472168695174
> var param = SamsaraApi.TripsParam(885, 66, startMs, endMs)
