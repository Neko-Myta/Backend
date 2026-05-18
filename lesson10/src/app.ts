import express from 'express';
import postsRouter from './modules/posts/routs/posts.routs';
import { buildTodoRouter } from './modules/todos/todos.conteiner';
import { Request, Response, NextFunction } from 'express';
import { pinoHttp } from "pino-http";

import { logger } from "./lib/logger";
import { privateGuard } from './middlawere/private-guard';
import { buildUserRouter } from './users/user.conteiners';


const app = express();

app.use(pinoHttp({ logger }));


const PORT = 3000;

app.use(express.json());

const customloger = (req: express.Request, _res: express.Response, next: express.NextFunction) => {
    const method = req.method;
    const url = req.url;
    console.log(`${method} - ${url}`);

    next();
    
    
}

app.use(customloger);



app.get('/helth', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.get("/private", privateGuard, (_req, res)=>{
  res.status(200).json({message: "This is private information. You are have access"})
})

app.use('/posts', postsRouter);
app.use('/todos', buildTodoRouter());
app.use("/users", buildUserRouter())
export default app;