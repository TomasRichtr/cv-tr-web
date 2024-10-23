import type { DeepReadonly } from 'vue';

export const API_ENDPOINTS: DeepReadonly<Record<string, string>> = {
  MESSAGES: '/messages',
  AUTH: '/auth',
};

export const API_METHODS: DeepReadonly<Record<string, string>> = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PATCH: 'patch',
  PUT: 'put',
};

export type ApiEndpoints = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];

export type ApiMethods = typeof API_METHODS[keyof typeof API_METHODS];
