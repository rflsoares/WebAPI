require("dotenv").config();

const express = require("express");

const app = express();

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