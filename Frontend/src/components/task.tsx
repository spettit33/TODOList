import { useState } from 'react';
import { ITask } from '../models/task';
import { useActiveTask } from '../contexts/active-task';

export function Task({ task }: { task: ITask }) {
  const [isDragging, setIsDragging] = useState(false);
  const { setActiveTask } = useActiveTask()!;

  return (
    <div
      draggable="true"
      className="border rounded-md text-center m-2 hover:bg-sky-400 cursor-grab active:cursor-grabbing"
      onDragStart={() => {
        setIsDragging(true);
        setActiveTask(task);
      }}
      onDragEnd={(e) => {
        console.log('DRAGEND');
        setIsDragging(false);
      }}
      onDrag={() => {
        setIsDragging(true);
        console.log(isDragging);
      }}
      data-task={JSON.stringify(task)}
    >
      <p className="text-lg font-semibold text-black">{task.Name}</p>
      <p className="font-medium text-gray-500">
        {task.Description ? task.Description : 'Dummy description'}
      </p>
    </div>
  );
}
