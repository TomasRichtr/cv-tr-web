import { create } from '../daos/users.dao';
import { hashString } from '../../utils/auth.utils';

export const initData = async () => {
  try {
    console.log('Adding data...');
    await create({ name: process.env.ADMIN_NAME!, password: hashString(process.env.ADMIN_PASSWORD!) });
    console.log('Data added');
  }
  catch (err) {
    console.error('Data adding failed', err);
  }
};
