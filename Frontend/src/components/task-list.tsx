import { useRef } from 'react';
import { ITask, Priority, Status, colorMap } from '../models/task';
import { useActiveTask } from '../contexts/active-task';

export function TaskList({
  children,
  title,
  sectionTitle,
  setTodos,
}: {
  children: React.ReactNode;
  title: Priority;
  sectionTitle: string;
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const listRef = useRef(null);
  const { activeTask } = useActiveTask()!;

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (activeTask) {
      const currentTodo = activeTask;
      setTodos((prev: ITask[]) => {
        return prev.map((c) => {
          if (c.Id == currentTodo.Id) {
            c.Status = sectionTitle.toUpperCase().replace(' ', '') as Status;
            c.Priority = title;
          }
          return c;
        });
      });
    }
  }

  const color = colorMap.get(title);

  return (
    <div className="m-2 basis-1/3 min-h-0" ref={listRef}>
      <h1 className="h-1/5">
        Priority: <span className={color}>{title}</span>
      </h1>
      <div
        className="h-4/5 rounded-md flex flex-col overflow-auto"
        onDragOver={handleDragOver}
        onDragLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {children}
      </div>
    </div>
  );
}
