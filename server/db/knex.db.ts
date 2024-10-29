import knex from 'knex';
import knexConfig from '../../knex.config';

const knexDb = knex(knexConfig);

export default knexDb;
