import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.code";

const app = express();

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Configurões de Rotas
app.use(usersRoute);

app.use(statusRoute);


//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000');
});



