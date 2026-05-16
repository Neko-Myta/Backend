import { Request, Response } from "express";
import { TodoService } from "./todo.server";

export class TodoController {
  constructor(private readonly service: TodoService) { }

  async getAll(_req: Request, res: Response) {
    const todos = await this.service.getAll();
    return res.status(200).json(todos);
  }

  async create(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Bad request" });
    }

    try {
      const todo = await this.service.create(title);
      return res.status(201).json(todo);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}