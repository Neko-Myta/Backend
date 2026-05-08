import express from 'express';
import userRoutes from './modules/users/routes/users.routs';
import productRoutes from './modules/products/routes/products.routs';




const app = express();


app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: 'Welcome to the Shop API' });
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);



export default app;