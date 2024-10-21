import { listMessages } from '~/server/controllers/messages.controller';

export default defineEventHandler(async () => {
  return listMessages();
});
