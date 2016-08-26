# SamsaraApi.HistoryParam

## Properties
Name | Type | Description
------------ | ------------- | -------------
**groupId** | **Integer** | Group ID to query.
**startMs** | **Integer** | Beginning of the time range, specified in milliseconds UNIX time.
**endMs** | **Integer** | End of the time range, specified in milliseconds UNIX time.
**stepMs** | **Integer** | Time resolution for which data should be returned, in milliseconds.
**series** | List of objects | See below.
**fillMissing** | **String** | One of: `"withNull`" or `"withPrevious`"; optional (defaults to &#39;withNull&#39;)

Each object in the "series" list has the following fields:

Name | Type | Description
------------ | ------------- | -------------
**widgetId** | **Integer** | Sensor ID to query.
**field** | **String** | Field to query. Must be one of: "ambientTemperature", "probeTemperature", "currentLoop1Raw", "currentLoop1Mapped", "currentLoop2Mapped", pmPowerTotal", "pmPhase1Power", "pmPhase2Power", "pmPhase3Power", "pmPhase1PowerFactor", "pmPhase2PowerFactor", "pmPhase3PowerFactor".

## Example
> var startMs = 1472168300000
> var endMs = 1472168695174
> var stepMs = 360000
> var series =  [{"widget_id": 32, "field": "ambientTemperature"}]
> var param = SamsaraApi.HistoryParam(885, startMs, endMs, stepMs, series)




