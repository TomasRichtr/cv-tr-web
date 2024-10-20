// Convert to constants
import type { DeepReadonly } from 'vue';

export const SKILLS: DeepReadonly<Record<string, string>> = {
  CSS: 'CSS',
  CYPRESS: 'cypress',
  ELASTIC_SEARCH: 'Elastic search',
  GIT: 'git',
  GRAPHQL: 'graphQL',
  HTML: 'HTML',
  JQUERY: 'JQuery',
  JAVASCRIPT: 'javascript',
  JEST: 'jest',
  KNEX: 'knex',
  MOCHA: 'mocha',
  MYSQL: 'mySQL',
  NETLIFY_FUNCTIONS: 'Netlify functions',
  NODE_JS: 'node.js',
  NUXT: 'nuxt',
  PLAYWRIGHT: 'playwright',
  REACT: 'react',
  REST_API: 'Rest Api',
  SASS: 'Sass',
  TAILWIND: 'tailwind',
  TYPESCRIPT: 'typescript',
  VITEST: 'vitest',
  VUE: 'vue',
};

export const SKILL_DEGREE: DeepReadonly<Record<string, number>> = {
  FEW_TIME: 1,
  OFTEN: 2,
  DAILY: 3,
};

export const SORTS: DeepReadonly<Record<string, number>> = {
  ALPHABETICALLY: 0,
  FEW_TIME: 1,
  OFTEN: 2,
  DAILY: 3,
};

export type Skills = typeof SKILLS[keyof typeof SKILLS];

export type SkillDegree = typeof SKILL_DEGREE[keyof typeof SKILL_DEGREE];

export type Sorts = typeof SORTS[keyof typeof SORTS];
