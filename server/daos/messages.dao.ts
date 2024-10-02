import { Tables } from '~/types/db.types';
import knexDb from '~/server/db/knex.db';
import type { Message } from '~/types/message.types';

export const create = async (message: Omit<Message, 'id'>) => {
  console.log(Tables.Messages);
  try {
    console.log(knexDb.client.config);
    return await knexDb(Tables.Messages).insert(message);
  }
  catch (e) {
    console.log(e);
  }
};
