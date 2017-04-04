# SamsaraApi.HistoryParam

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupId** | **Number** | Group ID to query. | 
**startMs** | **Number** | Beginning of the time range, specified in milliseconds UNIX time. | 
**endMs** | **Number** | End of the time range, specified in milliseconds UNIX time. | 
**stepMs** | **Number** | Time resolution for which data should be returned, in milliseconds. Specifying 3600000 will return data at hour intervals. | 
**series** | [**[SensorshistorySeries]**](SensorshistorySeries.md) |  | 
**fillMissing** | **String** |  | [optional] [default to &#39;withNull&#39;]


<a name="FillMissingEnum"></a>
## Enum: FillMissingEnum


* `withNull` (value: `"withNull"`)

* `withPrevious` (value: `"withPrevious"`)




