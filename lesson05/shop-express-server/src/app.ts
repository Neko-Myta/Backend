import express from 'express';
import userRoutes from './modules/users/routs/users.routs';
import productRoutes from './modules/products/routs/products.routs';
import e from 'express';



const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Shop API');
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);



export default app;