
import { Todo, TodoRepository } from "./todos.entety";
// Business logic
// DO NOT work here with express req res
export class TodoService {
  constructor(private readonly repo: TodoRepository) {
    this.repo = repo;
  }
  getAll(): Promise<Todo[]> {
    return this.repo.findAll();
  }
  create(title: string) {
    if (!title) {
      throw new Error("Title is required");
    }
        return this.repo.create(title);
  }
}