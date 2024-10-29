import { register } from 'ts-node';
import { hashString } from '../utils/auth.utils';
import { create } from './daos/users.dao';

register();

const bootstrapData = async () => {
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

bootstrapData();
