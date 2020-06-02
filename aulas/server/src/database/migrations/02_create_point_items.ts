import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
    // Criar tabelas

}

export async function down(knex: Knex) {
    // Voltar tabelas
    return knex.schema.dropTable('items');
}