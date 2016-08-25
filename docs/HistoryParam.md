# SamsaraApi.HistoryParam

## Properties
Name | Type | Description
------------ | ------------- | -------------
**groupId** | **Integer** | Group ID to query.
**startMs** | **Integer** | Beginning of the time range, specified in milliseconds UNIX time.
**endMs** | **Integer** | End of the time range, specified in milliseconds UNIX time.
**stepMs** | **Integer** | Time resolution for which data should be returned, in milliseconds.
**series** | [**[SensorshistorySeries]**](SensorshistorySeries.md) |
**fillMissing** | **String** | One of: `"withNull`" or `"withPrevious`"; optional (defaults to &#39;withNull&#39;)

## Example
> var startMs = 1472168300000
> var endMs = 1472168695174
> var stepMs = 360000
> var series =  [{"widget_id": 32, "field": "ambientTemperature"}]
> var param = SamsaraApi.HistoryParam(885, startMs, endMs, stepMs, series)




