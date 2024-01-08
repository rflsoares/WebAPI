require("dotenv").config();

const db = require('./db');

const express = require("express");

const app = express();

app.use(express.json());

app.patch('/clientes/:id', (request, response) => {
  const id = parseInt(request.parans.id);
  db.insertCustomer(customer);
  response.sendStatus(201);
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