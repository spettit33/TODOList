import { Request, Response } from "express";
import { User } from "../../models/user-model.js";

export const createUser = async (req: Request, res: Response) : Promise<void> => {
    const {name, email, age} = req.body;

    if (!name || !email || !age){
        res.status(400).json({message: "Required fields for user not provided."})
    }

    try {
        const newUser = new User({
            name,
            email,
            age,
        });
        await newUser.save();

        res.status(201).json();
    } catch(err){
        let error = err as Error;
        res.status(500).json({message: error.message})
    }
}