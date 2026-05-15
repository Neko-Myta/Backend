import { Router } from "express";
import { PostController } from "./posts.controlles";




export function createPostRouter(controller: PostController): Router {
    const router = Router();
    router.get("/", controller.getAll);
    router.post("/", controller.create);
    router.patch("/:id", controller.update);
    router.delete("/:id", controller.delete);
    return router;
}