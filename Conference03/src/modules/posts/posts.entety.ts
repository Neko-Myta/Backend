export interface Post {
    id: string;
    title: string;
    text: string;
    createdAt: Date;
}

export interface PostRepository {
    findAll(): Promise<Post[]>;
    create(title: string, text: string): Promise<Post>;
    update(id: string, title?: string, text?: string): Promise<Post>;
    delete(id: string): Promise<void>;
}