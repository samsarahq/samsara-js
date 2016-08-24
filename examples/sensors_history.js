/*
This is an example script to retrieve and print the temperature history data for 
a sensor.

*/
var SamsaraApi = require('samsara_api');

//var accessToken = '<SAMSARA_API_TOKEN>';

//var groupId = <GROUP_ID>;
//var sensorId = <SENSOR_ID>;
//var startMs = <startMs>;
//var endMs = <endMs>;
//var stepMs = <stepMs>;
var fillMissing = "withNull";

// Create an instance of the SamsaraApi client.
var apiInstance = new SamsaraApi.DefaultApi();

// Assemble the request parameters
var series = [{"widget_id": sensorId, "field": "ambientTemperature"}]
var historyParam = new SamsaraApi.HistoryParam(groupId, startMs, endMs, stepMs,
					       series, fillMissing);

var callback = function(error, data, response) {
    if (error) {
	console.error(error);
    } else {
	console.log(JSON.parse(response.text).results);
    }
};

// Call getSensorsHistory()
apiInstance.getSensorsHistory(accessToken, historyParam, callback);
