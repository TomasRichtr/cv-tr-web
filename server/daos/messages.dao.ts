import { Tables } from '~/types/db.types';
import knexDb from '~/server/db/knex.db';
import type { Message } from '~/types/message.types';

export const create = (message: Omit<Message, 'id'>) => {
  return knexDb(Tables.Messages).insert(message);
};
