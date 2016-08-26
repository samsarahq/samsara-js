/*
This is an example script to retrieve and print the trips for a vehicle.

*/
var SamsaraApi = require('samsara_api');

//var accessToken = '<SAMSARA_API_TOKEN>';
//var groupId = <GROUP_ID>;
//var vehicleId = <VEHICLE_ID>;
//var startMs = <startMs>;
//var endMs = <endMs>;

// Create an instance of the SamsaraApi client.
var apiInstance = new SamsaraApi.DefaultApi();

// Assemble the request parameters
var tripsParam = new SamsaraApi.TripsParam(groupId, vehicleId, startMs, endMs)

var callback = function(error, data, response) {
    if (error) {
	console.error(error);
    } else {
	console.log(JSON.parse(response.text).trips);
    }
};

// Call getFleetLocations()
apiInstance.getFleetTrips(accessToken, tripsParam, callback);
