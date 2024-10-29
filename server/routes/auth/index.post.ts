import { authenticatePassword } from '../../controllers/auth.controller';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return authenticatePassword(body);
});
