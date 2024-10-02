import { create } from '../daos/messages.dao';
import type { Message } from '~/types/message.types';

export const createMessage = async (message: Omit<Message, 'id'>) => {
  const id = await create(message);

  return id;
};
