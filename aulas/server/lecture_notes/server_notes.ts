import express from 'express';

const app = express();
app.use(express.json()) // Plugin para o express interpretar json

// Rota: Endereço Completo da Requisição
// Recurso:Entidade sendo acessada do sistema

// GET: Buscar informações do Backend
// POST: Criar informação do Backend
// PUT: Atualiza informação
// DELETE: Remover informação

// POST http://localhost:333/users/ = Criar Usuario
// GET http://localhost:333/users/ = Listar Usuarios
// GET http://localhost:333/users/5 = Buscar dados


// Request Param: Parâmetro que vem na própria rota que identifica um recurso

// get('ROTA',(argumento1,argumento2) => {bloco da funcao})
// :id = request param
// query -> usuário inventa, documentar API
// Request body: Paramêtros de criação/atualização

// Usando knex query builder
// SELECT * FROM users  WHERE name = 'Diego
// knex('users').where('name','Diego').select('*')

const users = [
    "Diego",
    "José",
    "Pedro",
    "Maria"]

app.get('/users/', (request, response) => {
    console.log("Curioso visitou listagem de usuários");
    const search = String(request.query.contains) // Query pode ser array, force string
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
    //response.send("Dae Mundo")
    //Json
    const id = Number(request.params.id);
    const user = users[id];
    response.json(user)
})


app.post('/users', (request, response) => {
    const data = request.body
    console.log(data)
    response.send("OK");
})




app.listen(3333);