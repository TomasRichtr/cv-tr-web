import { Tables } from '~/types/db.types';
import knexDb from '~/server/db/knex.db';
import type { Message } from '~/types/message.types';
import { MessagesCols } from '~/types/message.types';

export const create = async (message: Omit<Message, 'id'>) => {
  try {
    return await knexDb(Tables.Messages).insert(message);
  }
  catch (e) {
    console.log(e);
    throw e;
  }
};

export const list = async () => {
  try {
    return await knexDb(Tables.Messages);
  }
  catch (e) {
    console.log(e);
    throw e;
  }
};

export const update = async (id: string, message: Message) => {
  try {
    return await knexDb(Tables.Messages).where(MessagesCols.Id, id).update(message);
  }
  catch (e) {
    console.log(e);
    throw e;
  }
};

export const remove = async (id: string) => {
  try {
    return await knexDb(Tables.Messages).where(MessagesCols.Id, id).delete();
  }
  catch (e) {
    console.log(e);
    throw e;
  }
};
