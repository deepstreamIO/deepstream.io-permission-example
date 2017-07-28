const EventEmitter = require('events').EventEmitter
const ConfigPermissionHandler = require('deepstream.io/src/permission/config-permission-handler')

/**
 * The custom permission handler extends valve with a bit of custom logic
 *
 * @class CustomPermissionHandler
 */
module.exports = class CustomPermissionHandler extends EventEmitter {
  /**
  * @param {String} type exposes the type for logging purposes
  */
  constructor (options) {
    super()
    this.type = 'custom'
    this.description = 'bob'
    this.isReady = true

    this.configPermissionHandler = new ConfigPermissionHandler(options)
  }

  /**
  * @param   {String}   username the name of the connected user, as specified in isValidUser
  * @param   {Object}   message  a parsed deepstream message
  * @param   {Function} callback the callback to provide the result
  * @param   {[Object]}   authData additional optional authData as passed to isValidUser
  *
  * @public
  * @implements {PermissionHandler.isValidUser}
  * @returns {void}
  */
  canPerformAction (username, message, callback, authData) {
    // custom logic goes here
    this.configPermissionHandler.canPerformAction.apply(this, arguments)
  }
}

