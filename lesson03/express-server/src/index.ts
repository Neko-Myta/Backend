import express from 'express';
import postsRouter from './modules/posts/routs/poss.routs';



const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/helth', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});
    
app.use('/posts', postsRouter);
    

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});