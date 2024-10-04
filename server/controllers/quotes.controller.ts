import { QUOTES_URL } from '~/server/constants/quotes.contants';
import type { Quote } from '~/types/data.types';

export const getQuote = async () => {
  const [quote] = await $fetch<Quote[]>(QUOTES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return quote;
};