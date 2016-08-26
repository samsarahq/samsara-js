# SamsaraApi.TemperatureResponse

## Properties
Name | Type | Description
------------ | ------------- | -------------
**groupId** | **Integer** | 
**sensors** | List of objects | See below

Each object in the "sensors" list has the following fields:

Name | Type | Description
------------ | ------------- | -------------
**id** | **Integer** | ID of the sensor.
**ambientTemperature** | **Integer** | Currently reported ambient temperature in millidegrees celsius.
**probeTemperature** | **Integer** | Currently reported probe temperature in millidegrees celsius. If no probe is connected, this parameter will not be reported.

