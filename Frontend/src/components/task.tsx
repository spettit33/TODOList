import { ITask } from "../models/task"

export function Task({task}: {task: ITask}){
    return <div draggable className="border rounded-full text-center m-2 hover:bg-sky-700">
        <p className="text-lg font-semibold text-black">{task.Name}</p>
        <p className="font-medium text-gray-500">{task.Description ? task.Description: "Dummy description"}</p>
    </div>
}