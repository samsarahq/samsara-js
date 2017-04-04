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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.HosAuthenticationLogsParam = factory(root.SamsaraApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HosAuthenticationLogsParam model module.
   * @module models/HosAuthenticationLogsParam
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HosAuthenticationLogsParam</code>.
   * @alias module:models/HosAuthenticationLogsParam
   * @class
   * @param groupId {Number} Group ID to query.
   * @param driverId {Number} Driver ID to query.
   * @param startMs {Number} Beginning of the time range, specified in milliseconds UNIX time.
   * @param endMs {Number} End of the time range, specified in milliseconds UNIX time.
   */
  var exports = function(groupId, driverId, startMs, endMs) {
    var _this = this;

    _this['groupId'] = groupId;
    _this['driverId'] = driverId;
    _this['startMs'] = startMs;
    _this['endMs'] = endMs;
  };

  /**
   * Constructs a <code>HosAuthenticationLogsParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/HosAuthenticationLogsParam} obj Optional instance to populate.
   * @return {module:models/HosAuthenticationLogsParam} The populated <code>HosAuthenticationLogsParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
      }
      if (data.hasOwnProperty('driverId')) {
        obj['driverId'] = ApiClient.convertToType(data['driverId'], 'Number');
      }
      if (data.hasOwnProperty('startMs')) {
        obj['startMs'] = ApiClient.convertToType(data['startMs'], 'Number');
      }
      if (data.hasOwnProperty('endMs')) {
        obj['endMs'] = ApiClient.convertToType(data['endMs'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Group ID to query.
   * @member {Number} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * Driver ID to query.
   * @member {Number} driverId
   */
  exports.prototype['driverId'] = undefined;
  /**
   * Beginning of the time range, specified in milliseconds UNIX time.
   * @member {Number} startMs
   */
  exports.prototype['startMs'] = undefined;
  /**
   * End of the time range, specified in milliseconds UNIX time.
   * @member {Number} endMs
   */
  exports.prototype['endMs'] = undefined;



  return exports;
}));

