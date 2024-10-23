import type { DeepReadonly } from 'vue';

export type ApiEndpoints = '/messages' | '/auth';

export const API_ENDPOINTS: DeepReadonly<Record<string, ApiEndpoints>> = {
  MESSAGES: '/messages',
  AUTH: '/auth',
};

export type ApiMethods = 'post' | 'get' | 'put' | 'patch' | 'delete';

export const API_METHODS: DeepReadonly<Record<string, ApiMethods>> = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PATCH: 'patch',
  PUT: 'put',
};
