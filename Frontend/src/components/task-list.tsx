import {Priority, colorMap} from "../models/task"

export function TaskList({ children, title } : {children : React.ReactNode, title: Priority}){
    const color = colorMap.get(title);

    return  <div className="m-2">
                <h1>Priority: <span className={color}>{title}</span></h1>
                <div className="rounded-md flex flex-col min-h-[20vh]">
                    {children}
                </div>
            </div>
}