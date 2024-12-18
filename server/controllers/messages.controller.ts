import { create, list, remove, update } from '../daos/messages.dao';
import type { Message } from '../../types/message.types';
import { buildSubject, sendEmail } from '../../utils/email.utils';

export const createMessage = async (message: Omit<Message, 'id'>) => {
  const [id] = await create(message);
  const subject = buildSubject(id, message);
  sendEmail(message.email, subject, message.message);
  return id;
};

export const listMessages = async () => {
  return list();
};

export const updateMessage = async (id: string, message: Message) => {
  return update(id, message);
};

export const deleteMessage = async (id: string) => {
  return remove(id);
};
