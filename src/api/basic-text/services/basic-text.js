'use strict';

/**
 * basic-text service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-text.basic-text');
