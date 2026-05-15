import { v7 } from "uuid";
import { Post, PostRepository } from "./posts.entety";



export class InMemoryPostRepository implements PostRepository {
    update(id: string, title?: string, text?: string): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    private store: Map<string, Post> = new Map();
    async findAll(): Promise<Post[]> {
        return Array.from(this.store.values());
    }

    create(title: string, text: string): Promise<Post> {
        const newPost: Post = {
            id: v7(),
            title,
            text,
            createdAt: new Date(),
        };
        this.store.set(newPost.id, newPost);
        return Promise.resolve(newPost);
    }
}