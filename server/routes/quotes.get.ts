import { getQuote } from '~/server/controllers/quotes.controller';

export default defineEventHandler(async () => {
  return getQuote();
});
