require("dotenv").config();

const db = require('./db');

const express = require("express");

const app = express();

app.use(express.json());

//Para deletar é só ir no thunder, mudar o get para delete, ir no body, colocar a id que vc quiser deletar depois enviar
app.delete('/clientes/:id', (request, response) => {
    const id = parseInt(request.params.id);
    db.deleteCustomer(id);
    response.sendStatus(204);
  })

// Patch atualiza o registro, pode ser usado put, patch atualiza os campos, put atualiza a entidade inteira
app.patch('/clientes/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const customer = request.body;
  db.updateCustomer(id, customer);
  response.sendStatus(200);
})

app.post('/clientes', (request, response) => {
  const customer = request.body;
  db.insertCustomer(customer);
  response.sendStatus(201);
})

app.get('/clientes/:id', (request, response) => {
  const id = parseInt(request.params.id);
  response.json(db.selectCustomer(id));
})

app.get('/clientes', (request, response) => {
  response.json(db.selectCustomers());
})

app.get('/', (request, response, next) => {
  response.json({
    message: "It's alive!",
    name: process.env.FIRSTNAME,
    port: process.env.PORT
  })
})

app.listen(process.env.PORT, () => {
  console.log(`${process.env.FIRSTNAME}, sua app está rodando na porta ${process.env.PORT}`) 
})