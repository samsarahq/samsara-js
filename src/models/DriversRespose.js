/**
 * Samsara API
 * # Introduction The Samsara REST API lets you interact with the Samsara Cloud from anything that can send an HTTP request. With the Samsara API you can build powerful applications and custom solutions with sensor data.  Samsara has endpoints available to track and analyze sensors, vehicles, and entire fleets. If you’re familiar with what you can build with a REST API, the following API reference guide will be your go-to resource.  API access to the Samsara cloud is available to all Samsara administrators. If you’d like to try the API, [contact us](https://www.samsara.com/free-trial). The API is currently in beta and may be subject to frequent changes.  # Connecting to the API There are two ways to connect to the API. If you prefer to use the API in Javascript or Python, we supply SDKs which you can download here: [Javascript SDK](https://github.com/samsarahq/samsara-js), [Python SDK](https://github.com/samsarahq/samsara-python).  If you’d rather use another language to interact with the Samsara API, the endpoints and examples are in the reference guide below.  
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'models/DriversResposeDrivers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DriversResposeDrivers'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.DriversRespose = factory(root.SamsaraApi.ApiClient, root.SamsaraApi.DriversResposeDrivers);
  }
}(this, function(ApiClient, DriversResposeDrivers) {
  'use strict';




  /**
   * The DriversRespose model module.
   * @module models/DriversRespose
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DriversRespose</code>.
   * @alias module:models/DriversRespose
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DriversRespose</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/DriversRespose} obj Optional instance to populate.
   * @return {module:models/DriversRespose} The populated <code>DriversRespose</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('drivers')) {
        obj['drivers'] = ApiClient.convertToType(data['drivers'], [DriversResposeDrivers]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:models/DriversResposeDrivers>} drivers
   */
  exports.prototype['drivers'] = undefined;



  return exports;
}));


