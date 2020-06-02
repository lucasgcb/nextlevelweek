import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });
    // Criar tabelas

}

export async function down(knex: Knex) {
    // Voltar tabelas
    return knex.schema.dropTable('items');
}