import knexDb from '~/server/db/knex.db';

export const runDbMigrations = async () => {
  await knexDb.migrate.latest({ directory: '../migrations' });
};

export default defineTask({
  meta: {
    name: 'migrations.tasks',
    description: 'Run database migrations',
  },
  async run() {
    try {
      await knexDb.migrate.latest({ directory: '../migrations' });
      return { result: 'Success' };
    }
    catch {
      return { result: 'Failure' };
    }
  },
});
