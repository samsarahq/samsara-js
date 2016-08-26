# SamsaraApi.VehicleUpdateParam

## Properties
Name | Type | Description
------------ | ------------- | -------------
**groupId** | **Integer** | Group ID to query.
**vehicles** | [**[Vehicle]**](Vehicle.md) |

## Example
> var vehicles = [{"id": 66, "name": "New Name", "note": "New Note"}]
> var param = SamsaraApi.VehicleUpdateParam(885, vehicles)