import { updateMessage } from '../../../controllers/messages.controller';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = getRouterParam(event, 'id');
  return updateMessage(id!, body);
});
