import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import path from 'path';
import './database/connection';
import errorHandler from './errors/handler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto inteiro
// Recurso = usuário
//
//Métodos HTTP = GET, POST, PUT, DELETE
/**
 * GET = Buscar uma informação
 * POST = Criando uma informação
 * PUT = Editando uma informação
 * DELETE = deletando uma informação
 */
//Parâmetros
/**
 * Query: http://localhost:3333/users?search=walter (são utilizados para fazer busca, filtro, paginação.
 * Ao final do endereço estará composto por "?search") Geralmente são utilizados em parâmetros mais opcionais.
 * Route Params: http://localhost:3333/users/1 - são utilizados para identificar um recurso (a info "/x" - é a informação de ID do banco)
 * Body: http://localhost:3333/users/1 - traduzindo: corpo da requisição (aqui vem as informações para enviar dados que não caibam nas informações acima).
 * Ex.: Na criação do usuário, neste espaço virão os dados como endereço, telefone, nome, senha, e-mail, etc.
 * 
 * 
 */


app.listen(3333);
// Driver nativo, Query Builder, ORM (Object Relational Mapping)
// localhost:3333
