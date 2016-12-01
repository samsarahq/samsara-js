# SamsaraApi.SensorsApi

All URIs are relative to *https://api.samsara.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSensors**](SensorsApi.md#getSensors) | **POST** /sensors/list | /sensors/list
[**getSensorsHistory**](SensorsApi.md#getSensorsHistory) | **POST** /sensors/history | /sensors/history
[**getSensorsHumidity**](SensorsApi.md#getSensorsHumidity) | **POST** /sensors/humidity | /sensors/humidity
[**getSensorsTemperature**](SensorsApi.md#getSensorsTemperature) | **POST** /sensors/temperature | /sensors/temperature


<a name="getSensors"></a>
# **getSensors**
> InlineResponse2002 getSensors(accessToken, groupParam)

/sensors/list

Get sensor objects. This method returns a list of the sensor objects in the Samsara Cloud and information about them.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.SensorsApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | Group ID to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensors(accessToken, groupParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **groupParam** | [**GroupParam**](GroupParam.md)| Group ID to query. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSensorsHistory"></a>
# **getSensorsHistory**
> SensorHistoryResponse getSensorsHistory(accessToken, historyParam)

/sensors/history

Get historical data for specified sensors. This method returns a set of historical data for the specified sensors in the specified time range and at the specified time resolution.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.SensorsApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var historyParam = new SamsaraApi.HistoryParam(); // HistoryParam | Group ID, time range and resolution, and list of sensor ID, field pairs to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensorsHistory(accessToken, historyParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **historyParam** | [**HistoryParam**](HistoryParam.md)| Group ID, time range and resolution, and list of sensor ID, field pairs to query. | 

### Return type

[**SensorHistoryResponse**](SensorHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSensorsHumidity"></a>
# **getSensorsHumidity**
> HumidityResponse getSensorsHumidity(accessToken, sensorParam)

/sensors/humidity

Get humidity for requested sensors. This method returns the current relative humidity for the requested sensors.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.SensorsApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var sensorParam = new SamsaraApi.SensorParam(); // SensorParam | Group ID and list of sensor IDs to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensorsHumidity(accessToken, sensorParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **sensorParam** | [**SensorParam**](SensorParam.md)| Group ID and list of sensor IDs to query. | 

### Return type

[**HumidityResponse**](HumidityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSensorsTemperature"></a>
# **getSensorsTemperature**
> TemperatureResponse getSensorsTemperature(accessToken, sensorParam)

/sensors/temperature

Get temperature for requested sensors. This method returns the current ambient temperature (and probe temperature if applicable) for the requested sensors.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.SensorsApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var sensorParam = new SamsaraApi.SensorParam(); // SensorParam | Group ID and list of sensor IDs to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSensorsTemperature(accessToken, sensorParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **sensorParam** | [**SensorParam**](SensorParam.md)| Group ID and list of sensor IDs to query. | 

### Return type

[**TemperatureResponse**](TemperatureResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

