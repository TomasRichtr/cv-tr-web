import { SkillDegree, Skills } from '~/enums/skills.enum';
import { STRINGS } from '~/constants/strings.constants';

export const SKILLS_DEGREE = {
  [Skills.CSS]: SkillDegree.Daily,
  [Skills.Cypress]: SkillDegree.FewTime,
  [Skills.ElasticSearch]: SkillDegree.Often,
  [Skills.Git]: SkillDegree.Daily,
  [Skills.GraphQL]: SkillDegree.Daily,
  [Skills.HTML]: SkillDegree.Daily,
  [Skills.JQuery]: SkillDegree.FewTime,
  [Skills.Javascript]: SkillDegree.Daily,
  [Skills.Jest]: SkillDegree.Often,
  [Skills.Knex]: SkillDegree.Often,
  [Skills.Mocha]: SkillDegree.Often,
  [Skills.MySQL]: SkillDegree.FewTime,
  [Skills.NetlifyFunctions]: SkillDegree.Often,
  [Skills.NodeJs]: SkillDegree.Often,
  [Skills.Nuxt]: SkillDegree.FewTime,
  [Skills.Playwright]: SkillDegree.Often,
  [Skills.React]: SkillDegree.FewTime,
  [Skills.RestApi]: SkillDegree.Daily,
  [Skills.Sass]: SkillDegree.Daily,
  [Skills.Tailwind]: SkillDegree.Daily,
  [Skills.TypeScript]: SkillDegree.Daily,
  [Skills.Vitest]: SkillDegree.Daily,
  [Skills.Vue]: SkillDegree.Daily,
};

export const HEADER_LABELS = [
  STRINGS.skillsDegree.fewTimes, STRINGS.skillsDegree.often, STRINGS.skillsDegree.daily,
];

export const SORTING = [
  STRINGS.sorting.alphabetically, STRINGS.skillsDegree.fewTimes, STRINGS.skillsDegree.often, STRINGS.skillsDegree.daily,
];
