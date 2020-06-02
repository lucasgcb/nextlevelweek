import knex from 'knex';
import path from 'path';
// __dirname -> global, diretorio do arquivo executado
const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true
});

export default connection;

// Tabelas da coleta:

/// Points (pontos de coleta)
// image
// name
// email
// whatsapp
// latitude
// longitude
// city
// UF
/// Items (items para coleta)
// image
// title
/// Relacionamento N-N 
/// Tabela pivot do N-N: point_items (Relacionamento dos itens que um ponto coleta)
// point_id
// item_id

// Criando tabelas com Migrations do Knex
// Migrations = Histórico do Banco de Dados

