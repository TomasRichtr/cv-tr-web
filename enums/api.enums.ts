export const API_ENDPOINTS = {
  MESSAGES: '/messages',
} as const;

export const API_METHODS = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PATCH: 'patch',
  PUT: 'put',
} as const;

export type ApiEndpoints = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];

export type ApiMethods = typeof API_METHODS[keyof typeof API_METHODS];
