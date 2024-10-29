import type { Knex } from 'knex';
import { Tables } from '../../types/db.types';
import { UserCols } from '../../types/user.types';

export const up = (knexDB: Knex) => {
  return knexDB.schema
    .createTable(Tables.Users, (table: Knex.TableBuilder) => {
      table.increments(UserCols.Id).primary();

      table.string(UserCols.Name, 255).notNullable();

      table.string(UserCols.Password, 255);
    });
};

export const down = (knexDB: Knex) => {
  return knexDB.schema.dropTable(Tables.Messages);
};
