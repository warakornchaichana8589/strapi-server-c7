'use strict';

/**
 * online-shop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::online-shop.online-shop');
