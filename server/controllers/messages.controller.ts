import { create } from '../daos/messages.dao';
import type { Message } from '~/types/message.types';

export const createMessage = async (message: Omit<Message, 'id'>) => {
  const id = await create(message);
  let messageSubject = `from: ${message.email}, ${message.name}, id: ${id}`;
  if (message.company) messageSubject = messageSubject + ` / ${message.company}`;
  if (message.phone) messageSubject = messageSubject + ` / ${message.phone}`;
  sendEmail(message.email, messageSubject, message.message);
  return id;
};
