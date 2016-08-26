# SamsaraApi.TripResponse

## Properties
Name | Type | Description
------------ | ------------- | -------------
**trips** | List of trip objects | See below

Each trip object has the following fields:

Name | Type | Description
------------ | ------------- | -------------
**startMs** | **Integer** | Beginning of the trip in UNIX milliseconds.
**startCoordinates** | **Object**: {"latitude": <Integer>, "longitude": Integer>} | Start coordinates in (latitude, longitude) decimal degrees.
**startLocation** | **String** | Text representation of nearest identifiable location to the start (latitude, longitude) coordinates.
**endMs** | **Integer** | End of the trip in UNIX milliseconds.
**endCoordinates** | **Object**: {"latitude": <Integer>, "longitude": Integer>} | End coordinates in (latitude, longitude) decial degrees.
**endLocation** | **String** | Text representation of nearest identifiable location to the end (latitude, longitude) coordinates.


