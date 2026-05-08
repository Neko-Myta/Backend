import Router from 'express';
import { Product } from '../products.types';
import { v7 } from 'uuid';

const router = Router();
const products: Product[] = [
    {
        id: v7(),
        title: 'Product 1',
        description: 'Description for product 1',
        price: 10.99,
        stocks: 100,
        category: 'Category 1',
        createdAt: new Date().toISOString(),
    },
    {
        id: v7(),
        title: 'Product 2',
        description: 'Description for product 2',
        price: 19.99,
        stocks: 50,
        category: 'Category 2',
        createdAt: new Date().toISOString(),
    },
    {
        id: v7(),
        title: 'Product 3',
        description: 'Description for product 3',
        price: 5.99,
        stocks: 200,
        category: 'Category 3',
        createdAt: new Date().toISOString(),
    }
];

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
});

router.post('/', (req, res) => {
    const { title, description, price, stocks, category } = req.body;
    const newProduct: Product = {
        id: v7(),
        title,
        description,
        price,
        stocks,
        category,
        createdAt: new Date().toISOString(),
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

export default router;