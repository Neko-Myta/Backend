export interface User {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
}

export interface UserRepository {
    create(email: string, password: string): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}