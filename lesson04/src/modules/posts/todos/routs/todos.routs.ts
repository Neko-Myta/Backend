import { Router } from "express";
import { Todo } from "../todos.types";
import { v7 } from "uuid";
const router = Router();
const todos: Todo[] = [
  {
    id: v7(),
    title: "Learn express",
    content: "Build a REST API",
    status: "pending",
    createdAd: new Date().toISOString(),
  },
  {
    id: v7(),
    title: "Learn Nest",
    content: "Build a Nest app",
    status: "pending",
    createdAd: new Date().toISOString(),
  },
];

router.get("/", (_req, res) => {
    res.json(todos);
});

// GET - Получение определенного пункта списка дел по id
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
});

router.post("/", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    const newTodo: Todo = {
        id: v7(),
        title: "",
        content: "",
        status: "pending",
        createdAd: new Date().toISOString(),
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Todo created successfully", id: newTodo.id, todo: newTodo });
});

export default router;