import { Router } from "express";
import { TodoController } from "./todos.controlles";

import { createTodoRouter } from "./todos.route";
import { TodoService } from "./todos.server";
import { InMEMORYTodoRepository } from "./todos.repositor";


export function biuldTodoRouter(): Router {
     const repo = new InMEMORYTodoRepository();
  const service = new TodoService(repo);
  const controller = new TodoController(service);
  return createTodoRouter(controller);
}