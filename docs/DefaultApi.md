# SamsaraApi.DefaultApi

All URIs are relative to *https://api.samsara.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFleetAddress**](DefaultApi.md#addFleetAddress) | **POST** /fleet/add_address | /fleet/add_address
[**createFleetDispatchJobs**](DefaultApi.md#createFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/create | /fleet/dispatch_jobs/create
[**getFleet**](DefaultApi.md#getFleet) | **POST** /fleet/list | /fleet/list
[**getFleetDispatchJobs**](DefaultApi.md#getFleetDispatchJobs) | **POST** /fleet/dispatch_jobs | /fleet/dispatch_jobs
[**getFleetDrivers**](DefaultApi.md#getFleetDrivers) | **POST** /fleet/drivers | /fleet/drivers
[**getFleetHosLogs**](DefaultApi.md#getFleetHosLogs) | **POST** /fleet/hos_logs | /fleet/hos_logs
[**getFleetLocations**](DefaultApi.md#getFleetLocations) | **POST** /fleet/locations | /fleet/locations
[**getFleetTrips**](DefaultApi.md#getFleetTrips) | **POST** /fleet/trips | /fleet/trips
[**getSensors**](DefaultApi.md#getSensors) | **POST** /sensors/list | /sensors/list
[**getSensorsHistory**](DefaultApi.md#getSensorsHistory) | **POST** /sensors/history | /sensors/history
[**getSensorsHumidity**](DefaultApi.md#getSensorsHumidity) | **POST** /sensors/humidity | /sensors/humidity
[**getSensorsTemperature**](DefaultApi.md#getSensorsTemperature) | **POST** /sensors/temperature | /sensors/temperature
[**updateFleetDispatchJobs**](DefaultApi.md#updateFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/update | /fleet/dispatch_jobs/update
[**updateVehicles**](DefaultApi.md#updateVehicles) | **POST** /fleet/set_data | /fleet/set_data


<a name="addFleetAddress"></a>
# **addFleetAddress**
> addFleetAddress(accessToken, addressParam)

/fleet/add_address

This method adds an address book entry to the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

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
 **accessToken** | **String**| Samsara API access token. | 
 **addressParam** | [**AddressParam**](AddressParam.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFleetDispatchJobs"></a>
# **createFleetDispatchJobs**
> DispatchJobsResponse createFleetDispatchJobs(accessToken, createDispatchJobsParam)

/fleet/dispatch_jobs/create

Create dispatch jobs in the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var createDispatchJobsParam = new SamsaraApi.CreateDispatchJobsParam(); // CreateDispatchJobsParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFleetDispatchJobs(accessToken, createDispatchJobsParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **createDispatchJobsParam** | [**CreateDispatchJobsParam**](CreateDispatchJobsParam.md)|  | 

### Return type

[**DispatchJobsResponse**](DispatchJobsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleet"></a>
# **getFleet**
> InlineResponse200 getFleet(accessToken, groupParam)

/fleet/list

Get list of the vehicles. This method returns a list of the vehicles in the Samsara Cloud and information about them.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | Group ID to query.


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
 **accessToken** | **String**| Samsara API access token. | 
 **groupParam** | [**GroupParam**](GroupParam.md)| Group ID to query. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetDispatchJobs"></a>
# **getFleetDispatchJobs**
> DispatchJobsResponse getFleetDispatchJobs(accessToken, getDispatchJobsParam)

/fleet/dispatch_jobs

Get the dispatch jobs for the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var getDispatchJobsParam = new SamsaraApi.GetDispatchJobsParam(); // GetDispatchJobsParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetDispatchJobs(accessToken, getDispatchJobsParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **getDispatchJobsParam** | [**GetDispatchJobsParam**](GetDispatchJobsParam.md)|  | 

### Return type

[**DispatchJobsResponse**](DispatchJobsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetDrivers"></a>
# **getFleetDrivers**
> DriversRespose getFleetDrivers(accessToken, groupDriversParam)

/fleet/drivers

Get all the drivers for the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var groupDriversParam = new SamsaraApi.GroupDriversParam(); // GroupDriversParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetDrivers(accessToken, groupDriversParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **groupDriversParam** | [**GroupDriversParam**](GroupDriversParam.md)|  | 

### Return type

[**DriversRespose**](DriversRespose.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetHosLogs"></a>
# **getFleetHosLogs**
> HosLogsResponse getFleetHosLogs(accessToken, hosLogsParam)

/fleet/hos_logs

Get the HOS (hours of service) logs for the specified driver.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var hosLogsParam = new SamsaraApi.HosLogsParam(); // HosLogsParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetHosLogs(accessToken, hosLogsParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **hosLogsParam** | [**HosLogsParam**](HosLogsParam.md)|  | 

### Return type

[**HosLogsResponse**](HosLogsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetLocations"></a>
# **getFleetLocations**
> InlineResponse2001 getFleetLocations(accessToken, groupParam)

/fleet/locations

Get current location of vehicles in a group. This method returns the current location in latitude and longitude of all vehicles in a requested group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var groupParam = new SamsaraApi.GroupParam(); // GroupParam | Group ID to query.


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
 **accessToken** | **String**| Samsara API access token. | 
 **groupParam** | [**GroupParam**](GroupParam.md)| Group ID to query. | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFleetTrips"></a>
# **getFleetTrips**
> TripResponse getFleetTrips(accessToken, tripsParam)

/fleet/trips

Get historical trips data for specified vehicle. This method returns a set of historical trips data for the specified vehicle in the specified time range.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var tripsParam = new SamsaraApi.TripsParam(); // TripsParam | Group ID, vehicle ID and time range to query.


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
 **accessToken** | **String**| Samsara API access token. | 
 **tripsParam** | [**TripsParam**](TripsParam.md)| Group ID, vehicle ID and time range to query. | 

### Return type

[**TripResponse**](TripResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSensors"></a>
# **getSensors**
> InlineResponse2002 getSensors(accessToken, groupParam)

/sensors/list

Get sensor objects. This method returns a list of the sensor objects in the Samsara Cloud and information about them.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

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

var apiInstance = new SamsaraApi.DefaultApi();

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

var apiInstance = new SamsaraApi.DefaultApi();

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

var apiInstance = new SamsaraApi.DefaultApi();

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

<a name="updateFleetDispatchJobs"></a>
# **updateFleetDispatchJobs**
> DispatchJobsResponse updateFleetDispatchJobs(accessToken, updateDispatchJobsParam)

/fleet/dispatch_jobs/update

Update dispatch jobs in the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var updateDispatchJobsParam = new SamsaraApi.UpdateDispatchJobsParam(); // UpdateDispatchJobsParam | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFleetDispatchJobs(accessToken, updateDispatchJobsParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **updateDispatchJobsParam** | [**UpdateDispatchJobsParam**](UpdateDispatchJobsParam.md)|  | 

### Return type

[**DispatchJobsResponse**](DispatchJobsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVehicles"></a>
# **updateVehicles**
> updateVehicles(accessToken, vehicleUpdateParam)

/fleet/set_data

This method enables the mutation of metadata for vehicles in the Samsara Cloud.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.DefaultApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

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
 **accessToken** | **String**| Samsara API access token. | 
 **vehicleUpdateParam** | [**VehicleUpdateParam**](VehicleUpdateParam.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

