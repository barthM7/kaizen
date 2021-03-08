const knex = require('knex');
const configuration = require('../../knexfile');

const config = configuration.development;

connection = knex(config);

module.exports = connection;