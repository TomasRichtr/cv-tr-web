import { create } from '~/server/daos/users.dao';
import { hashString } from '~/utils/auth.utils';

const config = useRuntimeConfig();

export const initData = async () => {
  try {
    console.log('Adding data...');
    await create({ name: config.public.admin_name, password: hashString(config.public.admin_password) });
    console.log('Data added');
  }
  catch (err) {
    console.error('Data adding failed', err);
  }
};
