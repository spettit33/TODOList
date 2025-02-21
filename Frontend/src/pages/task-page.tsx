import { TaskList } from "../components/task-list"
import { Task } from "../components/task"
import { ITask } from "../models/task"
import { SectionList } from "../components/section-list"

const task: ITask = {
    Name: "Task 1",
    Priority: "HIGH",
    Status: "INPROGRESS",
}

export function TaskPage() {
    return <div className="flex flex-row">
                <div className="flex flex-col mr-20 ml-20 mt-5 gap-2 basis-1/4 min-h-[70vh]">
                    <SectionList title={"Backlog"}><Task task={task}/></SectionList>
                </div>
                <div className="flex flex-col mr-20 ml-20 mt-5 gap-2 basis-1/4 h-[70vh]">
                <SectionList title={"In Progress"}>
                    <TaskList title={"HIGH"}><Task task={task}/></TaskList>
                    <TaskList title={"MEDIUM"}><Task task={task}/></TaskList>
                    <TaskList title={"LOW"}><Task task={task}/></TaskList>
                </SectionList>
                </div>
                <div className="flex flex-col mr-20 ml-20 mt-5 gap-2 basis-1/4 min-h-[70vh]">
                    <SectionList title={"Completed"}><Task task={task}/></SectionList>
                </div>
            </div>
  }
  