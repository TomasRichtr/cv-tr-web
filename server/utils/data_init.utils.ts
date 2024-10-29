import { create } from '../daos/users.dao';
import { hashString } from '../../utils/auth.utils';

const config = useRuntimeConfig();

export const initData = async () => {
  try {
    console.log('Adding data...');
    await create({ name: process.env.admin_name!, password: hashString(process.env.admin_password!) });
    console.log('Data added');
  }
  catch (err) {
    console.error('Data adding failed', err);
  }
};
