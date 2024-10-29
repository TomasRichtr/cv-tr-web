export const CONFIG = {
  HOST: process.env.DATABASE_HOST || 'localhost',
  USER: process.env.DATABASE_USER || 'root',
  PASSWORD: process.env.DATABASE_PASSWORD || 'password',
  DATABASE: process.env.DATABASE || 'tr_cv_app',
  PORT: process.env.DATABASE_PORT || 3306,
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
