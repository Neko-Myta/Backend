import { Router } from "express";
import { v7 } from "uuid";
import { User } from "../users.types";



const router = Router();    
const users: User[] = [
    {
        id: v7(),
        name: 'John Doe',
        email: 'Dog Doe',
        password: 'password123',
        role: 'user',
        createdAt: new Date().toISOString(),
    },
    {
        id: v7(),
        name: 'Jane Smith',
        email: 'Jane Smith',
        password: 'password456',
        role: 'admin',
        createdAt: new Date().toISOString(),
    },
    {
        id: v7(),
        name: 'Alice Johnson',
        email: 'Alice Johnson',
        password: 'password789',
        role: 'user',
        createdAt: new Date().toISOString(),
    }
];

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/', (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser: User = {
        id: v7(),
        name,
        email,
        password,
        role,
        createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    res.status(201).json(newUser);
}
);

export default router;