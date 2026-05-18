import UserService from "./user.service";
import { Request, Response } from "express";



export class UserController {
    constructor(private readonly service: UserService) {}

    register = async (req: Request, res: Response) => {
       const { email, password } = req.body;
         try {
            const user = await this.service.register(email, password);
            res.status(201).json(user);
         }
            catch (error) { 
            res.status(400).json({ error: (error as Error).message });
            }
    }

    login = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        try {
            const result = await this.service.login(email, password);
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof Error) {   
            res.status(400).json({ error: (error as Error).message });
        }
    }

};
}