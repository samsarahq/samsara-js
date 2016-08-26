# SamsaraApi.InlineResponse2001

## Properties
Name | Type | Description
------------ | ------------- | -------------
**groupId** | **Integer** |
**vehicles** | List of vehicle location objects | See below

Each object in the "vehicles" list has the following fields:

Name | Type | Description
------------ | ------------- | -------------
**id** | **Integer** | ID of the vehicle.
**name** | **String** | Name of the vehicle.
**latitude** | **Integer** | Latitude in decimal degrees.
**longitude** | **Integer** | Longitude in decimal degrees.
**location** | **String** | Text representation of nearest identifiable location to (latitude, longitude) coordinates.
**time** | **Integer** | The time the reported location was logged, reported as a UNIX timestamp in milliseconds.




