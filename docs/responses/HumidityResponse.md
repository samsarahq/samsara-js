# SamsaraApi.HumidityResponse

## Properties
Name | Type | Description
------------ | ------------- | -------------
**groupId** | **Integer** |  
**sensors** | List of objects | See below

Each object in the "sensors" list has the following fields:

Name | Type | Description
------------ | ------------- | -------------
**id** | **Integer** | ID of the sensor.
**humidity** | **Integer** | Currently reported relative humidity in percent, from 0-100.
