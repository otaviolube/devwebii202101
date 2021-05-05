const express = require('express');
const app = express();

const port = 3000;
const hostname = '0.0.0.0';

const defaultRoutes = require('./routes/default-routes');
const alunosRoutes = require('./routes/alunos-routes');
const alunosRoutesPg = require('./routes/alunos-routes-pg');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use('/', defaultRoutes);
app.use('/api/alunos/', alunosRoutes);
app.use('/api/alunospg/', alunosRoutesPg)


app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço: http://${hostname}:${port}`);
});