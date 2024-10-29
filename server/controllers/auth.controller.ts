import { authenticate } from '../daos/users.dao';
import type { Auth } from '../../types/auth.types';

export const authenticatePassword = async ({ id, password }: Auth) => {
  return authenticate(id, password);
};
