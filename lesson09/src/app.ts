import express from 'express';
import { pinoHttp } from 'pino-http';

import { logger } from './lib/logger';
import { privateGuard } from './middlawere/private-guard';

import { buildTodoRouter } from './modules/todo/todo.conteiner';
import postsRouter from './modules/post/routes/post.routes';

const app = express();
app.use(pinoHttp({ logger }));


app.use(express.json());

app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.get('/private', privateGuard, (_req, res) => {
    res.status(200).json({
        message: 'This is private information. You have access',
    });
});

// Routes
app.use('/posts', postsRouter);
app.use('/todos', buildTodoRouter());

export default app;