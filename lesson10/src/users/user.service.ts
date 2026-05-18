import { compare } from "bcrypt";
import { UserRepository } from "./user.entity";
import { comparePassword, hashPassword } from "../lib/hash";
import { signetToken } from "../lib/jwt";

export default class UserService {
    constructor(private readonly repo: UserRepository) {}

    async register(email: string, password: string) {
        if(!email || !password) {
            throw new Error("Email and password are required");
        }
        const existingUser = await this.repo.findByEmail(email);
        if(existingUser) {
            throw new Error("User already exists");
        }   

        const hash = await hashPassword(password);
        
        const user = await this.repo.create(email, hash);

        return user;
    }

    async login(email: string, password: string) {
        const user = await this.repo.findByEmail(email);

        if(!user) {
            throw new Error("Invalid email or password");
        }
        const valid = await comparePassword(password, user.password);
        if(!valid) {
            throw new Error("Invalid email or password");
        }
        
        const  token = signetToken({ userId: user.id });

        return { token , user };
    }
}
