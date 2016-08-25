# SamsaraApi.AddressParam

## Properties
Name | Type | Description 
------------ | ------------- | -------------
**groupId** | **Integer** | Group ID to query.
**name** | **String** | Name of the location to add to the address book.
**address** | **String** | The address of the entry to add, as it would be recognized if provided to maps.google.com.
**radius** | **Integer** | Radius in meters of the address (used for matching vehicle trip stops to this location).

## Example
> var param = SamsaraApi.AddressParam(885, "501 York Street, San Francisco", 5)
