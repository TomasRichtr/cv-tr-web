import type { Knex } from 'knex';
import { MessagesCols } from '../../types/message.types';
import { Tables } from '../../types/db.types';

exports.up = function (knexDB: Knex) {
  return knexDB.schema
    .table(Tables.Messages, (table: Knex.TableBuilder) => {
      table.boolean(MessagesCols.Read);
    });
};

exports.down = function (knexDB: Knex) {
  return knexDB.schema.table(Tables.Messages, (table: Knex.TableBuilder) => {
    table.dropColumn(MessagesCols.Read);
  });
};
