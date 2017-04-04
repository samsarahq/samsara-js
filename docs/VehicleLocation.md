# SamsaraApi.VehicleLocation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the vehicle. | 
**name** | **String** | Name of the vehicle. | [optional] 
**latitude** | **Number** | Latitude in decimal degrees. | [optional] 
**longitude** | **Number** | Longitude in decimal degrees. | [optional] 
**location** | **String** | Text representation of nearest identifiable location to (latitude, longitude) coordinates. | [optional] 
**time** | **Number** | The time the reported location was logged, reported as a UNIX timestamp in milliseconds. | [optional] 
**onTrip** | **Boolean** | Whether or not a trip is currently in progress for this vehicle. More information available via /fleet/trips endpoint. | [optional] 


