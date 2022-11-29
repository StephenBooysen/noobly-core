'use strict';
const express = require('express');

/**
   * Initailise the searching api endpoint. The following endpoints are available
   *  - GET https://domain/administrator/searching/api/status : returns a "success" 
   * @param {object} servicemanager
   * @returns {object} _routeManager
   */
module.exports = function (moduleManager) {

    /** Initiate the object */
    var _routeManager = {};

    // Initialise the view manager    
    _routeManager.initialise = function () {

        // Extract the interface manager from the parameters and configure
        var _interfaceManager = moduleManager.services.interface ? moduleManager.services.interface : null;

        if (_interfaceManager != null) {

            // The server ping
            _interfaceManager.app().route('/administrator/searching/api/status').get(function (req, res) {
                res.status(200).send('success');
            });
        }
    }()

    return _routeManager;
};

