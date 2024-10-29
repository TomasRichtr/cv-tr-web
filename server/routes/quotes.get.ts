import { getQuote } from '../controllers/quotes.controller';

export default defineEventHandler(async () => {
  return getQuote();
});
