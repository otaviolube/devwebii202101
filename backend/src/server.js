require('dotenv').config({
    path: process.env.NODE_ENV === "development" ? ".env.development" : ".env"
});

console.log(process.env.NODE_ENV);

const express = require('express');
const sync = require('./infra/postgres').sincronizarPostgres;
const app = express();

const port = process.env.APP_PORT;
const hostname = process.env.APP_HOSTNAME;

(async () => await sync())() //Sincroniza o meu Postgres

const defaultRoutes = require('./routes/default-routes');
const alunosRoutes = require('./routes/alunos-routes');
const alunosRoutesPg = require('./routes/alunos-routes-pg');

app.use(express.urlencoded({
    extended: true
})); 

app.use(express.json());

app.use('/', defaultRoutes);
app.use('/api/alunos/', alunosRoutes);
app.use('/api/alunospg/', alunosRoutesPg);


app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço: http://${hostname}:${port}`);
});