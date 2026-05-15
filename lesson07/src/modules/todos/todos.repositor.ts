import { v7 } from "uuid";
import { Todo, TodoRepository,  } from "./todos.entety";


export class InMEMORYTodoRepository implements TodoRepository {
    private store: Map<string, Todo> = new Map();

    async findAll(): Promise<Todo[]> {
        return Array.from(this.store.values());
    }

    async create(title: string): Promise<Todo> {
        const newTodo: Todo = {
            id: v7(),    
            title,

            done: false,
            createdAt: new Date(),
        };
        this.store.set(newTodo.id, newTodo);
        return newTodo;
    }
}   