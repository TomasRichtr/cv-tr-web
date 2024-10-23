const config = useRuntimeConfig();

const CONFIG = {
  HOST: config.public.database_host || 'localhost',
  USER: config.public.database_user || 'root',
  PASSWORD: config.public.database_password || 'password',
  DATABASE: config.public.database || 'tr_cv_app',
  PORT: config.public.database_port || 3306,
};

export default {
  client: 'mysql',
  connection: {
    host: CONFIG.HOST,
    user: CONFIG.USER,
    password: CONFIG.PASSWORD,
    database: CONFIG.DATABASE,
    port: CONFIG.PORT,
    charset: 'utf8mb4',
  },
  migrations: {
    directory: './server/migrations',
    extension: 'ts',
  },
};
