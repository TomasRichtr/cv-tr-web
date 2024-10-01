import type { Knex } from 'knex';
import { Tables } from '~/types/db.types';
import { MessagesCols } from '~/types/message.types';

exports.up = function (knexDB: Knex) {
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

exports.down = function (knexDB: Knex) {
  return knexDB.schema.dropTable(Tables.Messages);
};
