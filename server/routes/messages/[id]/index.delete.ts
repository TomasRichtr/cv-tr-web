import { deleteMessage } from '~/server/controllers/messages.controller';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  return deleteMessage(id!);
});
