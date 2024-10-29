import type { Knex } from 'knex';
import { MessagesCols } from '../../types/message.types';
import { Tables } from '../../types/db.types';

export const up = (knexDB: Knex) => {
  return knexDB.schema
    .table(Tables.Messages, (table: Knex.TableBuilder) => {
      table.boolean(MessagesCols.Read);
    });
};

export const down = (knexDB: Knex) => {
  return knexDB.schema.table(Tables.Messages, (table: Knex.TableBuilder) => {
    table.dropColumn(MessagesCols.Read);
  });
};
