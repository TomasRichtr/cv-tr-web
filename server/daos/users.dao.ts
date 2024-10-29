import knexDb from '../db/knex.db';
import { Tables } from '../../types/db.types';
import type { User } from '../../types/user.types';
import { UserCols } from '../../types/user.types';
import { isStringHashEqual } from '../../utils/auth.utils';

export const create = async (user: Omit<User, 'id'>) => {
  try {
    return await knexDb(Tables.Users).insert(user);
  }
  catch (e) {
    console.log(e);
    throw e;
  }
};

export const authenticate = async (id: string, password: string) => {
  const { password: hashPassword } = await knexDb(Tables.Users).select(UserCols.Password).where({ id }).first();
  return isStringHashEqual(password, hashPassword);
};
