import express from 'express';
import postsRouter from './modules/posts/routs/posts.routs';
import { biuldTodoRouter } from './modules/posts/todos/todos.conteiner';




const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/helth', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});
    
app.use('/posts', postsRouter);
app.use('/todos', biuldTodoRouter());

export default app;