import { register } from 'ts-node';
import knex from 'knex';
import { CONFIG as dbConfig } from '../knex.config';

register();

const createDatabase = async () => {
  let tempKnexInstance: ReturnType<typeof knex> | undefined;

  try {
    console.log(`Checking and ensuring database '${dbConfig.DATABASE}' exists...`);
    tempKnexInstance = knex({
      client: dbConfig.CLIENT,
      connection: {
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        charset: dbConfig.CHARSET,
      },
    });

    await tempKnexInstance.raw(
      `
        CREATE DATABASE IF NOT EXISTS \`${dbConfig.DATABASE}\` 
        CHARACTER SET ${dbConfig.CHARSET} COLLATE utf8mb4_unicode_ci;
      `,
    );
    console.log(`Database '${dbConfig.DATABASE}' check/creation complete.`);
  }
  catch (err) {
    console.error('Database creation process failed:', err);
    process.exit(1);
  }
  finally {
    if (tempKnexInstance) {
      console.log('Ensuring temporary knex instance is destroyed...');
      await tempKnexInstance.destroy().catch((destroyError) => {
        console.error('Error destroying temporary knex instance:', destroyError);
      });
    }
  }
};

createDatabase();
