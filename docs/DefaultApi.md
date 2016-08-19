# SamsaraApi.DefaultApi

All URIs are relative to *https://api.samsara.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFleetAddress**](DefaultApi.md#addFleetAddress) | **POST** /fleet/add_address | Add an address book entry for the group.
[**getFleet**](DefaultApi.md#getFleet) | **POST** /fleet/list | Get the vehicles for the group.
[**getFleetLocations**](DefaultApi.md#getFleetLocations) | **POST** /fleet/locations | Get the GPS locations for all vehicles in the group.
[**getFleetTrips**](DefaultApi.md#getFleetTrips) | **POST** /fleet/trips | Get the trips for the specified vehicle.
[**getSensors**](DefaultApi.md#getSensors) | **POST** /sensors/list | Get the sensors for a group.
[**getSensorsHistory**](DefaultApi.md#getSensorsHistory) | **POST** /sensors/history | Get the historical data for the sensors.
[**getSensorsHumidity**](DefaultApi.md#getSensorsHumidity) | **POST** /sensors/humidity | Get the current humidity readings for the specified sensors.
[**getSensorsTemperature**](DefaultApi.md#getSensorsTemperature) | **POST** /sensors/temperature | Get the current temperature readings for the specified sensors.
[**updateVehicles**](DefaultApi.md#updateVehicles) | **POST** /fleet/set_data | Update the metadata for a vehicle.


<a name="addFleetAddress"></a>
# **addFleetAddress**
> addFleetAddress(accessToken, addressParam)

Add an address book entry for the group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var addressParam = new SamsaraApi.AddressParam(); // AddressParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFleetAddress(accessToken, addressParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **addressParam** | [**AddressParam**](AddressParam.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFleet"></a>
# **getFleet**
> InlineResponse200 getFleet(accessToken, groupParam)

Get the vehicles for the group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleet(accessToken, groupParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **groupParam** | [**GroupParam**](GroupParam.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFleetLocations"></a>
# **getFleetLocations**
> InlineResponse2001 getFleetLocations(accessToken, groupParam)

Get the GPS locations for all vehicles in the group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetLocations(accessToken, groupParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **groupParam** | [**GroupParam**](GroupParam.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFleetTrips"></a>
# **getFleetTrips**
> TripResponse getFleetTrips(accessToken, tripsParam)

Get the trips for the specified vehicle.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var tripsParam = new SamsaraApi.TripsParam(); // TripsParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetTrips(accessToken, tripsParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **tripsParam** | [**TripsParam**](TripsParam.md)|  | 

### Return type

[**TripResponse**](TripResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensors"></a>
# **getSensors**
> InlineResponse2002 getSensors(accessToken, groupParam)

Get the sensors for a group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | 


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
 **accessToken** | **String**|  | 
 **groupParam** | [**GroupParam**](GroupParam.md)|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensorsHistory"></a>
# **getSensorsHistory**
> SensorHistoryResponse getSensorsHistory(accessToken, historyParam)

Get the historical data for the sensors.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var historyParam = new SamsaraApi.HistoryParam(); // HistoryParam | 


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
 **accessToken** | **String**|  | 
 **historyParam** | [**HistoryParam**](HistoryParam.md)|  | 

### Return type

[**SensorHistoryResponse**](SensorHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensorsHumidity"></a>
# **getSensorsHumidity**
> HumidityResponse getSensorsHumidity(accessToken, sensorParam)

Get the current humidity readings for the specified sensors.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var sensorParam = new SamsaraApi.SensorParam(); // SensorParam | 


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
 **accessToken** | **String**|  | 
 **sensorParam** | [**SensorParam**](SensorParam.md)|  | 

### Return type

[**HumidityResponse**](HumidityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensorsTemperature"></a>
# **getSensorsTemperature**
> TemperatureResponse getSensorsTemperature(accessToken, sensorParam)

Get the current temperature readings for the specified sensors.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var sensorParam = new SamsaraApi.SensorParam(); // SensorParam | 


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
 **accessToken** | **String**|  | 
 **sensorParam** | [**SensorParam**](SensorParam.md)|  | 

### Return type

[**TemperatureResponse**](TemperatureResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVehicles"></a>
# **updateVehicles**
> updateVehicles(accessToken, vehicleUpdateParam)

Update the metadata for a vehicle.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | 

var vehicleUpdateParam = new SamsaraApi.VehicleUpdateParam(); // VehicleUpdateParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateVehicles(accessToken, vehicleUpdateParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **vehicleUpdateParam** | [**VehicleUpdateParam**](VehicleUpdateParam.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

