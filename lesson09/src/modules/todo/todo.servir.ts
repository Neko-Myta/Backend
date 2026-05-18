
import { Todo, TodoRepository } from './todo.entity';


export class TodoService {
  constructor(private readonly repo: TodoRepository) { }

  getAll(): Promise<Todo[]> {
    return this.repo.findAll();
  }
  
  create(title: string): Promise<Todo> {
  if (!title || title.trim().length === 0) {
    throw new Error('Title is required');
  }

  return this.repo.create(title);
} 
}