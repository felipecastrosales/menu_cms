'use strict';

/**
 * weekday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weekday.weekday');
