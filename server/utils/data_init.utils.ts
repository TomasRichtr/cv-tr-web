import { create } from '../daos/users.dao';
import { hashString } from '../../utils/auth.utils';
import { INIT_DATA } from '../../constants/init_data.constants';

export const initData = async () => {
  try {
    console.log('Adding data...');
    await create({ name: INIT_DATA.ADMIN_NAME, password: hashString(INIT_DATA.ADMIN_PASSWORD) });
    console.log('Data added');
  }
  catch (err) {
    console.error('Data adding failed', err);
  }
};
