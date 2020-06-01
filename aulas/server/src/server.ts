import express from 'express';

const app = express();


// get('ROTA',(argumento1,argumento2) => {bloco da funcao})
app.get('/users', (request, response) => {
    console.log("Curioso visitou listagem de usuários");
    //response.send("Dae Mundo")
    //Json
    response.json([
        "Diego",
        "José",
        "Pedro",
        "Maria"])
})



app.listen(3333);