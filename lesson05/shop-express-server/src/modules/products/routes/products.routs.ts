import { Router } from 'express';
import { Product } from '../products.types';
import { v4 } from 'uuid';

const router = Router();

const products: Product[] = [
    {
        id: v4(),
        title: 'Product 1',
        description: 'Description for product 1',
        price: 10.99,
        stocks: 100,
        category: 'Category 1',
        createdAt: new Date().toISOString(),
    },
    {
        id: v4(),
        title: 'Product 2',
        description: 'Description for product 2',
        price: 19.99,
        stocks: 50,
        category: 'Category 2',
        createdAt: new Date().toISOString(),
    },
    {
        id: v4(),
        title: 'Product 3',
        description: 'Description for product 3',
        price: 5.99,
        stocks: 200,
        category: 'Category 3',
        createdAt: new Date().toISOString(),
    }
];

router.get('/', (_req, res) => {
    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
});

router.post('/', (req, res) => {
    const { title, description, price, stocks, category } = req.body;

    const newProduct: Product = {
        id: v4(),
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

router.patch('/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const { title, description, price, stocks, category } = req.body;

    if (title) product.title = title;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stocks) product.stocks = stocks;
    if (category) product.category = category;

    res.json(product);
});

router.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === req.params.id);

    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    products.splice(productIndex, 1);
    res.status(204).send();
});

export default router;