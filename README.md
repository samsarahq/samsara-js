# samsara-js

Javascript SDK for the Samsara REST API.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To install directly from Github:

```shell
    npm install samsarahq/samsara-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

* Install samsara-js: [installation procedure](#installation).

* Get your Samsara API token.

The access token authenticates requests. It is tied to your organization and can be found on the
API Tokens tab on your Organization Settings page in Samsara Cloud (click on the user drop-down in
the upper-right of the Dashboard).

All API calls require the access token.

* Get the Group IDs for the groups you want to access.

The API Tokens tab lists all your organization's Groups and their associated IDs ("groupId").

Certain API calls require this value.

* Check out the examples in the `examples/` directory to see how to use the Javascript client.

## Documentation for API Endpoints

All URIs are relative to *https://api.samsara.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SamsaraApi.DefaultApi* | [**addFleetAddress**](docs/DefaultApi.md#addFleetAddress) | **POST** /fleet/add_address | /fleet/add_address
*SamsaraApi.DefaultApi* | [**createFleetDispatchJobs**](docs/DefaultApi.md#createFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/create | /fleet/dispatch_jobs/create
*SamsaraApi.DefaultApi* | [**getFleet**](docs/DefaultApi.md#getFleet) | **POST** /fleet/list | /fleet/list
*SamsaraApi.DefaultApi* | [**getFleetDispatchJobs**](docs/DefaultApi.md#getFleetDispatchJobs) | **POST** /fleet/dispatch_jobs | /fleet/dispatch_jobs
*SamsaraApi.DefaultApi* | [**getFleetDrivers**](docs/DefaultApi.md#getFleetDrivers) | **POST** /fleet/drivers | /fleet/drivers
*SamsaraApi.DefaultApi* | [**getFleetDriversSummary**](docs/DefaultApi.md#getFleetDriversSummary) | **POST** /fleet/drivers/summary | /fleet/drivers/summary
*SamsaraApi.DefaultApi* | [**getFleetHosAuthenticationLogs**](docs/DefaultApi.md#getFleetHosAuthenticationLogs) | **POST** /fleet/hos_authentication_logs | /fleet/hos_authentication_logs
*SamsaraApi.DefaultApi* | [**getFleetHosLogs**](docs/DefaultApi.md#getFleetHosLogs) | **POST** /fleet/hos_logs | /fleet/hos_logs
*SamsaraApi.DefaultApi* | [**getFleetLocations**](docs/DefaultApi.md#getFleetLocations) | **POST** /fleet/locations | /fleet/locations
*SamsaraApi.DefaultApi* | [**getFleetMaintenanceList**](docs/DefaultApi.md#getFleetMaintenanceList) | **POST** /fleet/maintenance/list | /fleet/maintenance/list
*SamsaraApi.DefaultApi* | [**getFleetTrips**](docs/DefaultApi.md#getFleetTrips) | **POST** /fleet/trips | /fleet/trips
*SamsaraApi.DefaultApi* | [**getSensors**](docs/DefaultApi.md#getSensors) | **POST** /sensors/list | /sensors/list
*SamsaraApi.DefaultApi* | [**getSensorsHistory**](docs/DefaultApi.md#getSensorsHistory) | **POST** /sensors/history | /sensors/history
*SamsaraApi.DefaultApi* | [**getSensorsHumidity**](docs/DefaultApi.md#getSensorsHumidity) | **POST** /sensors/humidity | /sensors/humidity
*SamsaraApi.DefaultApi* | [**getSensorsTemperature**](docs/DefaultApi.md#getSensorsTemperature) | **POST** /sensors/temperature | /sensors/temperature
*SamsaraApi.DefaultApi* | [**updateFleetDispatchJobs**](docs/DefaultApi.md#updateFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/update | /fleet/dispatch_jobs/update
*SamsaraApi.DefaultApi* | [**updateVehicles**](docs/DefaultApi.md#updateVehicles) | **POST** /fleet/set_data | /fleet/set_data
*SamsaraApi.FleetApi* | [**addFleetAddress**](docs/FleetApi.md#addFleetAddress) | **POST** /fleet/add_address | /fleet/add_address
*SamsaraApi.FleetApi* | [**createFleetDispatchJobs**](docs/FleetApi.md#createFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/create | /fleet/dispatch_jobs/create
*SamsaraApi.FleetApi* | [**getFleet**](docs/FleetApi.md#getFleet) | **POST** /fleet/list | /fleet/list
*SamsaraApi.FleetApi* | [**getFleetDispatchJobs**](docs/FleetApi.md#getFleetDispatchJobs) | **POST** /fleet/dispatch_jobs | /fleet/dispatch_jobs
*SamsaraApi.FleetApi* | [**getFleetDrivers**](docs/FleetApi.md#getFleetDrivers) | **POST** /fleet/drivers | /fleet/drivers
*SamsaraApi.FleetApi* | [**getFleetDriversSummary**](docs/FleetApi.md#getFleetDriversSummary) | **POST** /fleet/drivers/summary | /fleet/drivers/summary
*SamsaraApi.FleetApi* | [**getFleetHosAuthenticationLogs**](docs/FleetApi.md#getFleetHosAuthenticationLogs) | **POST** /fleet/hos_authentication_logs | /fleet/hos_authentication_logs
*SamsaraApi.FleetApi* | [**getFleetHosLogs**](docs/FleetApi.md#getFleetHosLogs) | **POST** /fleet/hos_logs | /fleet/hos_logs
*SamsaraApi.FleetApi* | [**getFleetLocations**](docs/FleetApi.md#getFleetLocations) | **POST** /fleet/locations | /fleet/locations
*SamsaraApi.FleetApi* | [**getFleetMaintenanceList**](docs/FleetApi.md#getFleetMaintenanceList) | **POST** /fleet/maintenance/list | /fleet/maintenance/list
*SamsaraApi.FleetApi* | [**getFleetTrips**](docs/FleetApi.md#getFleetTrips) | **POST** /fleet/trips | /fleet/trips
*SamsaraApi.FleetApi* | [**updateFleetDispatchJobs**](docs/FleetApi.md#updateFleetDispatchJobs) | **POST** /fleet/dispatch_jobs/update | /fleet/dispatch_jobs/update
*SamsaraApi.FleetApi* | [**updateVehicles**](docs/FleetApi.md#updateVehicles) | **POST** /fleet/set_data | /fleet/set_data
*SamsaraApi.SensorsApi* | [**getSensors**](docs/SensorsApi.md#getSensors) | **POST** /sensors/list | /sensors/list
*SamsaraApi.SensorsApi* | [**getSensorsHistory**](docs/SensorsApi.md#getSensorsHistory) | **POST** /sensors/history | /sensors/history
*SamsaraApi.SensorsApi* | [**getSensorsHumidity**](docs/SensorsApi.md#getSensorsHumidity) | **POST** /sensors/humidity | /sensors/humidity
*SamsaraApi.SensorsApi* | [**getSensorsTemperature**](docs/SensorsApi.md#getSensorsTemperature) | **POST** /sensors/temperature | /sensors/temperature


## Documentation for Models

 - [SamsaraApi.AddressParam](docs/AddressParam.md)
 - [SamsaraApi.CreateDispatchJobsParam](docs/CreateDispatchJobsParam.md)
 - [SamsaraApi.DispatchJobsResponse](docs/DispatchJobsResponse.md)
 - [SamsaraApi.DispatchJobsResponseDispatchJobs](docs/DispatchJobsResponseDispatchJobs.md)
 - [SamsaraApi.DriversRespose](docs/DriversRespose.md)
 - [SamsaraApi.DriversResposeDrivers](docs/DriversResposeDrivers.md)
 - [SamsaraApi.DriversSummaryParam](docs/DriversSummaryParam.md)
 - [SamsaraApi.DriversSummaryResponse](docs/DriversSummaryResponse.md)
 - [SamsaraApi.DriversSummaryResponseSummaries](docs/DriversSummaryResponseSummaries.md)
 - [SamsaraApi.ErrorResponse](docs/ErrorResponse.md)
 - [SamsaraApi.FleetdispatchJobscreateDispatchJobs](docs/FleetdispatchJobscreateDispatchJobs.md)
 - [SamsaraApi.FleetdispatchJobsupdateDispatchJobs](docs/FleetdispatchJobsupdateDispatchJobs.md)
 - [SamsaraApi.GetDispatchJobsParam](docs/GetDispatchJobsParam.md)
 - [SamsaraApi.GroupDriversParam](docs/GroupDriversParam.md)
 - [SamsaraApi.GroupParam](docs/GroupParam.md)
 - [SamsaraApi.HistoryParam](docs/HistoryParam.md)
 - [SamsaraApi.HosAuthenticationLogsParam](docs/HosAuthenticationLogsParam.md)
 - [SamsaraApi.HosAuthenticationLogsResponse](docs/HosAuthenticationLogsResponse.md)
 - [SamsaraApi.HosAuthenticationLogsResponseAuthenticationLogs](docs/HosAuthenticationLogsResponseAuthenticationLogs.md)
 - [SamsaraApi.HosLogsParam](docs/HosLogsParam.md)
 - [SamsaraApi.HosLogsResponse](docs/HosLogsResponse.md)
 - [SamsaraApi.HosLogsResponseLogs](docs/HosLogsResponseLogs.md)
 - [SamsaraApi.HumidityResponse](docs/HumidityResponse.md)
 - [SamsaraApi.HumidityResponseSensors](docs/HumidityResponseSensors.md)
 - [SamsaraApi.InlineResponse200](docs/InlineResponse200.md)
 - [SamsaraApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [SamsaraApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [SamsaraApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [SamsaraApi.Sensor](docs/Sensor.md)
 - [SamsaraApi.SensorHistoryResponse](docs/SensorHistoryResponse.md)
 - [SamsaraApi.SensorHistoryResponseResults](docs/SensorHistoryResponseResults.md)
 - [SamsaraApi.SensorParam](docs/SensorParam.md)
 - [SamsaraApi.SensorshistorySeries](docs/SensorshistorySeries.md)
 - [SamsaraApi.TemperatureResponse](docs/TemperatureResponse.md)
 - [SamsaraApi.TemperatureResponseSensors](docs/TemperatureResponseSensors.md)
 - [SamsaraApi.TripResponse](docs/TripResponse.md)
 - [SamsaraApi.TripResponseEndCoordinates](docs/TripResponseEndCoordinates.md)
 - [SamsaraApi.TripResponseStartCoordinates](docs/TripResponseStartCoordinates.md)
 - [SamsaraApi.TripResponseTrips](docs/TripResponseTrips.md)
 - [SamsaraApi.TripsParam](docs/TripsParam.md)
 - [SamsaraApi.UpdateDispatchJobsParam](docs/UpdateDispatchJobsParam.md)
 - [SamsaraApi.Vehicle](docs/Vehicle.md)
 - [SamsaraApi.VehicleLocation](docs/VehicleLocation.md)
 - [SamsaraApi.VehicleMaintenance](docs/VehicleMaintenance.md)
 - [SamsaraApi.VehicleMaintenanceJ1939](docs/VehicleMaintenanceJ1939.md)
 - [SamsaraApi.VehicleMaintenanceJ1939CheckEngineLight](docs/VehicleMaintenanceJ1939CheckEngineLight.md)
 - [SamsaraApi.VehicleMaintenanceJ1939DiagnosticTroubleCodes](docs/VehicleMaintenanceJ1939DiagnosticTroubleCodes.md)
 - [SamsaraApi.VehicleMaintenancePassenger](docs/VehicleMaintenancePassenger.md)
 - [SamsaraApi.VehicleMaintenancePassengerCheckEngineLight](docs/VehicleMaintenancePassengerCheckEngineLight.md)
 - [SamsaraApi.VehicleMaintenancePassengerDiagnosticTroubleCodes](docs/VehicleMaintenancePassengerDiagnosticTroubleCodes.md)
 - [SamsaraApi.VehicleUpdateParam](docs/VehicleUpdateParam.md)

## Footnotes

This Javascript SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2016-08-19T10:15:23.341-07:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen
