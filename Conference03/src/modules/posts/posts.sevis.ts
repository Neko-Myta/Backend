import { Post, PostRepository } from "./posts.entety";


export class PostService {
    [x: string]: any;
    constructor(private readonly repo: PostRepository) {
        this.repo = repo;
    }

    getAll(): Promise<Post[]> {
        return this.repo.findAll();
    }

    create(title: string, text: string): Promise<Post> {
        if (!title || !text) {
            throw new Error("Title and text are required");
        }
        return this.repo.create(title, text);
    }
}