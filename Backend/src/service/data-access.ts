import { createUser } from "./operations/create-user.js"
import { getTaskByUser } from "./operations/get-task-by-user.js"
import { getUsers } from "./operations/get-users.js"

export const createUserService = function(){
    return {
        getAll: getUsers,
        create: createUser
    }
}

export const createTaskService = function(){
    return {
        getByUser : getTaskByUser
    }
}