import { createMessage } from '~/server/controllers/messages.controller';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await createMessage(body);
});