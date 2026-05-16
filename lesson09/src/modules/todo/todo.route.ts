import { Router } from "express";
import { TodoController } from "./todo.controlles";



export function createTodoRouter(controller: TodoController): Router {
    const router = Router();
    router.get("/", controller.getAll.bind(controller));
    router.post("/", controller.create.bind(controller));
    return router;
}