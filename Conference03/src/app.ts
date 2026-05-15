import express from 'express';
import { buildTodoRouter } from './modules/todos/todos.conteiner';
import { buildPostRouter } from './modules/posts/posts.container';




const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/helth', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});
    
app.use('/posts', buildPostRouter());
app.use('/todos', buildTodoRouter());

export default app;