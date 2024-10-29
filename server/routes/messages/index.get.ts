import { listMessages } from '../../controllers/messages.controller';

export default defineEventHandler(async () => {
  return listMessages();
});
