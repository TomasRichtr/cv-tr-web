import type { Knex } from 'knex';
import { MessagesCols } from '../../types/message.types';
import { Tables } from '../../types/db.types';

export const up = (knexDB: Knex) => {
  return knexDB.schema
    .createTable(Tables.Messages, (table: Knex.TableBuilder) => {
      table.increments(MessagesCols.Id).primary();
      table.string(MessagesCols.Name, 255).notNullable();
      table.string(MessagesCols.Company, 255);
      table.string(MessagesCols.Email, 255).notNullable();
      table.string(MessagesCols.Phone, 255);
      table.string(MessagesCols.Message, 255).notNullable();
    });
};

export const down = (knexDB: Knex) => {
  return knexDB.schema.dropTable(Tables.Messages);
};
