import { Router } from "express";
import { TodoController } from "./todos.controlles";

import { createTodoRouter } from "./todos.route";
import { TodoService } from "./todos.server";
import { DrizzleRepository } from "./todos.repositor";


export function buildTodoRouter(): Router {
   //  const repo = new InMEMORYTodoRepository();
    const repo = new DrizzleRepository();
  const service = new TodoService(repo);
  const controller = new TodoController(service);
  return createTodoRouter(controller);
}