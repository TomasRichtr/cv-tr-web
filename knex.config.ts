export const CONFIG = {
  HOST: process.env.database_host || 'localhost',
  USER: process.env.database_user || 'root',
  PASSWORD: process.env.database_password || 'password',
  DATABASE: process.env.database || 'tr_cv_app',
  PORT: process.env.database_port || 3306,
  CLIENT: 'mysql',
  MIGRATIONS: {
    directory: './server/migrations',
    extension: 'ts',
  },
  CHARSET: 'utf8mb4',
};

export default {
  client: CONFIG.CLIENT,
  connection: {
    host: CONFIG.HOST,
    user: CONFIG.USER,
    password: CONFIG.PASSWORD,
    database: CONFIG.DATABASE,
    port: CONFIG.PORT,
    charset: CONFIG.CHARSET,
  },
  migrations: CONFIG.MIGRATIONS,
};
