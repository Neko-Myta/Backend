import { Router } from "express";
import { v4 } from "uuid";
import { User } from "../users.types";

const router = Router();

const users: User[] = [
    {
        id: v4(),
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        role: 'user',
        createdAt: new Date().toISOString(),
    },
    {
        id: v4(),
        name: 'Jane Smith',
        email: 'Jane Smith@example.com',
        password: 'password456',
        role: 'admin',
        createdAt: new Date().toISOString(),
    },
    {
        id: v4(),
        name: 'Alice Johnson',
        email: 'Alice Johnson@example.com',
        password: 'password789',
        role: 'user',
        createdAt: new Date().toISOString(),
    }
];

router.get('/', (_req, res) => {
    const safeUsers = users.map(({ password, ...rest }) => rest);
    res.json(safeUsers);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { password, ...safeUser } = user;
    res.json(safeUser);
});

router.post('/', (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    const newUser: User = {
        id: v4(),
        name,
        email,
        password,
        role,
        createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    const { password: _, ...safeUser } = newUser;
    res.status(201).json(safeUser);
});

router.patch('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { name, email, password, role } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
    if (role) user.role = role;

    const { password: _, ...safeUser } = user;
    res.json(safeUser);
});

router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(userIndex, 1);
    res.status(204).send();
});


export default router;