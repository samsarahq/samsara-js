# SamsaraApi.DefaultApi

All URIs are relative to *https://api.samsara.com/v1*

Method | Description
------------- | -------------
[**addFleetAddress**](DefaultApi.md#addFleetAddress) | This method adds an address book entry to the specified group.
[**getFleet**](DefaultApi.md#getFleet) | This method returns a list of the vehicles in the Samsara Cloud and information about them.
[**getFleetLocations**](DefaultApi.md#getFleetLocations) | This method returns the current location in latitude and longitude of all vehicles in a requested group.
[**getFleetTrips**](DefaultApi.md#getFleetTrips) | This method returns a set of historical trips data for the specified vehicle in the specified time range.
[**getSensors**](DefaultApi.md#getSensors) | This method returns a list of the sensor objects in the Samsara Cloud and information about them.
[**getSensorsHistory**](DefaultApi.md#getSensorsHistory) | This method returns a set of historical data for the specified sensors in the specified time range and at the specified time resolution.
[**getSensorsHumidity**](DefaultApi.md#getSensorsHumidity) | This method returns the current relative humidity for the requested sensors.
[**getSensorsTemperature**](DefaultApi.md#getSensorsTemperature) | This method returns the current ambient temperature (and probe temperature if applicable) for the requested sensors.
[**updateVehicles**](DefaultApi.md#updateVehicles) | This method enables the mutation of metadata for vehicles in the Samsara Cloud.


<a name="addFleetAddress"></a>
# **addFleetAddress**

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

### Response

null (empty response body)

<a name="getFleet"></a>
# **getFleet**

This method returns a list of the vehicles in the Samsara Cloud and information about them.

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

### Response

[**InlineResponse200**](InlineResponse200.md)

<a name="getFleetLocations"></a>
# **getFleetLocations**

This method returns the current location in latitude and longitude of all vehicles in a requested group.

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

### Response

[**InlineResponse2001**](InlineResponse2001.md)

<a name="getFleetTrips"></a>
# **getFleetTrips**

This method returns a set of historical trips data for the specified vehicle in the specified time range.

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

### Response

[**TripResponse**](TripResponse.md)

<a name="getSensors"></a>
# **getSensors**

This method returns a list of the sensor objects in the Samsara Cloud and information about them.

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

### Response

[**InlineResponse2002**](InlineResponse2002.md)

<a name="getSensorsHistory"></a>
# **getSensorsHistory**

This method returns a set of historical data for the specified sensors in the specified time range and at the specified time resolution.

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

### Response

[**SensorHistoryResponse**](SensorHistoryResponse.md)

<a name="getSensorsHumidity"></a>
# **getSensorsHumidity**

This method returns the current relative humidity for the requested sensors.

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

### Response

[**HumidityResponse**](HumidityResponse.md)

<a name="getSensorsTemperature"></a>
# **getSensorsTemperature**

This method returns the current ambient temperature (and probe temperature if applicable) for the requested sensors.

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

### Response

[**TemperatureResponse**](TemperatureResponse.md)

<a name="updateVehicles"></a>
# **updateVehicles**

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

### Response

null (empty response body)
