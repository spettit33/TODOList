import { Task } from "../../models/task-model.js";

export const getTaskByUser = async function(userId?: string){
    const tasks = await Task.find({ 'User._id': userId });
    return tasks;
}