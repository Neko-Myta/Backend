
import { Todo, TodoRepository } from './todo.entety';


export class TodoService {
  constructor(private readonly repo: TodoRepository) { }

  getAll(): Promise<Todo[]> {
    return this.repo.findAll();
  }
  
  create(title: string): Promise<Todo> {
    if (!title) {
      throw new Error('Title is required');
    }

    return this.repo.create(title);
  }
}