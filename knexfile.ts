import type { Knex } from 'knex';
import knexDb from './knex.config';

const config: { [key: string]: Knex.Config } = {
  development: knexDb,
  production: knexDb,
};

module.exports = config;
