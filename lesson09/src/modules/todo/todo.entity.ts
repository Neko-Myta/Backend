export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: string | Date;
  
}
// Interface for repository
export interface TodoRepository {
  findAll(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
}

export interface NewTodo {
  title: string;
  done: boolean;
}