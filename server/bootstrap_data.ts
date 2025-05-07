import { register } from 'ts-node';
import { hashString } from '../utils/auth.utils';
import { INIT_DATA } from '../constants/init_data.constants';
import { create } from './daos/users.dao';

register();

const bootstrapData = async () => {
  try {
    await create({ name: INIT_DATA.ADMIN_NAME, password: hashString(INIT_DATA.ADMIN_PASSWORD) });
    process.exit(0);
  }
  catch (err) {
    console.error('Bootstrap process failed:', err);
    process.exit(1);
  }
};

bootstrapData();
