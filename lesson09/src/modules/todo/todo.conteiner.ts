import { Router } from "express";
import { TodoController } from "./todo.controlles";

import { createTodoRouter } from "./todo.route";
import { TodoService } from "./todo.server";
import { DrizzleRepository } from "./todo.repository";


export function buildTodoRouter(): Router {
   //  const repo = new InMEMORYTodoRepository();
    const repo = new DrizzleRepository();
  const service = new TodoService(repo);
  const controller = new TodoController(service);
  return createTodoRouter(controller);
}