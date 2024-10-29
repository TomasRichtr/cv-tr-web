import type { Quote } from '../../types/data.types';
import { QUOTES_URL } from '../../constants/quotes.contants';

export const getQuote = async () => {
  const [quote] = await $fetch<Quote[]>(QUOTES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return quote;
};
