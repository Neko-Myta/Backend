/*
import { Todo, TodoRepository,  } from "./todo.entety";
import { db } from "../../db";
import { todos } from "../../db/schema";


export class DrizzleRepository implements TodoRepository {
  async findAll(): Promise<Todo[]> {
    return await db.select().from(todos);
  }
  async create(title: string): Promise<Todo> {
    const newTodo = {
      title,
      done: false,
    };
    const [todo] = await db.insert(todos).values(newTodo).returning()
    return todo
  }
}
  */
import { db } from "../../db";
import { todos } from "../../db/schema";
import { Todo, NewTodo } from "./todo.entity";

export class DrizzleRepository {
  async findAll(): Promise<Todo[]> {
    return db.select().from(todos);
  }

  async create(title: string): Promise<Todo> {
    const newTodo: NewTodo = {
      title,
      done: false,
    };

    const result = await db
      .insert(todos)
      .values(newTodo)
      .returning();

    const todo = result[0];

    if (!todo) {
      throw new Error("Insert failed");
    }

    return todo;
  }
}