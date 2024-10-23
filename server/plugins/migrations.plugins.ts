import { register } from 'ts-node';
import knexDb from '~/server/db/knex.db';

register();

export default defineNitroPlugin(async () => {
  try {
    console.log('Running migrations...');
    knexDb.migrate.latest().then(() => {
      return;
    }).then(() => {
      initData();
    });
    console.log('Migrations finished');
  }
  catch (err) {
    console.error('Migration failed', err);
  }
});
