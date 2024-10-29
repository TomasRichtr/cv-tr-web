import { register } from 'ts-node';
import { create } from '../../server/daos/users.dao';
import { hashString } from '../../utils/auth.utils';

register();

const runMigrations = async () => {
  try {
    await create({ name: process.env.ADMIN_NAME!, password: hashString(process.env.ADMIN_PASSWORD!) });
  }
  catch (err) {
    console.error('Migration failed', err);
  }
  finally {
    process.exit();
  }
};

// Execute the function
runMigrations();
