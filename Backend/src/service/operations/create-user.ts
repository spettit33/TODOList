import { User } from "../../models/user-model.js";

export const createUser = async function(name: string, email: string, age: number){
    const newUser = new User({name, email, age});
    await newUser.save();
}