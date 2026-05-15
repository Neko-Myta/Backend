import { PostService } from "./posts.sevis";
import { Request, Response } from "express";


export class PostController {
    constructor(private readonly service: PostService) {
        this.service = service;
    }

    async getAll(_req: Request, res: Response) {
        const posts = await this.service.getAll();
        res.status(200).json(posts);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { title, text } = req.body;
        if (!title && !text) {
            res.status(400).json({ error: "Bad request. No title or text" });
        }
        try {
            const post = await this.service.update(id, title, text);
            res.status(200).json(post);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            }
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await this.service.delete(id);
            res.status(204).send();
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            }
        }
    }


    async create(req: Request, res: Response) {
        const { title, text } = req.body;
        if (!title || !text) {
            res.status(400).json({ error: "Bad request" });
        }

        try {
            const post = await this.service.create(title, text);
            res.status(201).json(post);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            }
        }
    }
}