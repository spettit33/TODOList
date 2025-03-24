import { Request, Response } from "express";
import { User } from "../../models/user-model.js";
import { createUserService } from "../../service/data-access.js";

export const createUser = async (req: Request, res: Response) : Promise<void> => {
    const {name, email, age} = req.body;
    const userService = createUserService();

    if (!name || !email || !age){
        res.status(400).json({message: "Required fields for user not provided."})
    }

    try {
        userService.create(name,email,age);

        res.status(201).json();
    } catch(err){
        let error = err as Error;
        res.status(500).json({message: error.message})
    }
}