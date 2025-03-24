import { User } from "../../models/user-model.js";

export const getUsers = async function(){
    const users = await User.find();
    return users;
}