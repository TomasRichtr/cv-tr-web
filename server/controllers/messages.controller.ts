import { create } from '../daos/messages.dao';

export const createMessage = async (message: unknown) => {
  const id = await create(message);

  return id;
};
