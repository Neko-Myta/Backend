import { Router } from "express";
import { PostController } from "./posts.controlles";
import { createPostRouter } from "./posts.route";
import { PostService } from "./posts.sevis";
import { InMemoryPostRepository } from "./posts.repository";



export function buildPostRouter(): Router {
    const repo = new InMemoryPostRepository();
    const service = new PostService(repo);
    const controller = new PostController(service);
    return createPostRouter(controller);
}
