import knex from 'knex';

const CONFIG = {
  HOST: process.env.database_host || 'localhost',
  USER: process.env.database_user || 'root',
  PASSWORD: process.env.database_password || 'password',
  DATABASE: process.env.database || 'tr_cv_app',
  PORT: process.env.database_port ? +process.env.database_port : 3306,
};

const knexDb = knex({
  client: 'mysql',
  connection: {
    host: CONFIG.HOST,
    user: CONFIG.USER,
    password: CONFIG.PASSWORD,
    database: CONFIG.DATABASE,
    port: CONFIG.PORT,
    charset: 'utf8mb4',
  },
});

export default knexDb;
