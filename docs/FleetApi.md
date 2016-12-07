# SamsaraApi.FleetApi

All URIs are relative to *https://api.samsara.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFleetAddress**](FleetApi.md#addFleetAddress) | **POST** /fleet/add_address | /fleet/add_address
[**createFleetDispatchJobs**](FleetApi.md#createFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/create | /fleet/dispatch_jobs/create
[**getFleet**](FleetApi.md#getFleet) | **POST** /fleet/list | /fleet/list
[**getFleetDispatchJobs**](FleetApi.md#getFleetDispatchJobs) | **POST** /fleet/dispatch_jobs | /fleet/dispatch_jobs
[**getFleetDrivers**](FleetApi.md#getFleetDrivers) | **POST** /fleet/drivers | /fleet/drivers
[**getFleetDriversSummary**](FleetApi.md#getFleetDriversSummary) | **POST** /fleet/drivers/summary | /fleet/drivers/summary
[**getFleetHosLogs**](FleetApi.md#getFleetHosLogs) | **POST** /fleet/hos_logs | /fleet/hos_logs
[**getFleetLocations**](FleetApi.md#getFleetLocations) | **POST** /fleet/locations | /fleet/locations
[**getFleetTrips**](FleetApi.md#getFleetTrips) | **POST** /fleet/trips | /fleet/trips
[**updateFleetDispatchJobs**](FleetApi.md#updateFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/update | /fleet/dispatch_jobs/update
[**updateVehicles**](FleetApi.md#updateVehicles) | **POST** /fleet/set_data | /fleet/set_data


<a name="addFleetAddress"></a>
# **addFleetAddress**
> addFleetAddress(accessToken, addressParam)

/fleet/add_address

This method adds an address book entry to the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.FleetApi();

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

var apiInstance = new SamsaraApi.FleetApi();

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

var apiInstance = new SamsaraApi.FleetApi();

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

var apiInstance = new SamsaraApi.FleetApi();

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

var apiInstance = new SamsaraApi.FleetApi();

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

<a name="getFleetDriversSummary"></a>
# **getFleetDriversSummary**
> DriversSummaryResponse getFleetDriversSummary(accessToken, driversSummaryParam)

/fleet/drivers/summary

Get the distance and time each driver in an organization has driven in a given time period.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.FleetApi();

var accessToken = "accessToken_example"; // String | Samsara API access token.

var driversSummaryParam = new SamsaraApi.DriversSummaryParam(); // DriversSummaryParam | Org ID and time range to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFleetDriversSummary(accessToken, driversSummaryParam, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**| Samsara API access token. | 
 **driversSummaryParam** | [**DriversSummaryParam**](DriversSummaryParam.md)| Org ID and time range to query. | 

### Return type

[**DriversSummaryResponse**](DriversSummaryResponse.md)

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

var apiInstance = new SamsaraApi.FleetApi();

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

var apiInstance = new SamsaraApi.FleetApi();

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

var apiInstance = new SamsaraApi.FleetApi();

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

<a name="updateFleetDispatchJobs"></a>
# **updateFleetDispatchJobs**
> DispatchJobsResponse updateFleetDispatchJobs(accessToken, updateDispatchJobsParam)

/fleet/dispatch_jobs/update

Update dispatch jobs in the specified group.

### Example
```javascript
var SamsaraApi = require('samsara_api');

var apiInstance = new SamsaraApi.FleetApi();

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

var apiInstance = new SamsaraApi.FleetApi();

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

