import { TaskList } from '../components/task-list';
import { Task } from '../components/task';
import { ITask } from '../models/task';
import { SectionList } from '../components/section-list';
import { NewTaskButton } from '../components/new-task-button';
import Modal from '../components/new-task-modal';
import { useState } from 'react';
import { ActiveTaskProvider } from '../contexts/active-task';

const tasks: ITask[] = [
  {
    Id: '550e8400-e29b-41d4-a716-446655440000',
    Name: 'Task 1',
    Priority: 'HIGH',
    Status: 'INPROGRESS',
  },
  {
    Id: '6f9619ff-8b86-d011-b42d-00cf4fc964ff',
    Name: 'Task 2',
    Priority: 'HIGH',
    Status: 'BACKLOG',
  },
  {
    Id: 'b07ba32a-7e02-4a4e-8c4a-92b29d4d32a4',
    Name: 'Task 3',
    Priority: 'LOW',
    Status: 'COMPLETE',
  },
  {
    Id: '7d6e8d79-7351-4c23-9c88-2fdfb22e88e1',
    Name: 'Task 4',
    Priority: 'MEDIUM',
    Status: 'INPROGRESS',
  },
  {
    Id: 'ff99b3c1-3f9a-4327-a034-598b99f1d682',
    Name: 'Task 5',
    Priority: 'LOW',
    Status: 'COMPLETE',
  },
  {
    Id: 'c2f6e689-51a7-4d98-907a-81d489b8b048',
    Name: 'Task 6',
    Priority: 'MEDIUM',
    Status: 'COMPLETE',
  },
];

export function TaskPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITask[]>(tasks);

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <>
      <ActiveTaskProvider>
        <div className="flex flex-row ml-20 mr-20 min-w-[100vh]">
          <div className="flex flex-col mr-10 mt-5 gap-2 basis-1/3">
            <SectionList title={'Backlog'}>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'Backlog'}
                title={'HIGH'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'HIGH' && c.Status == 'BACKLOG')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'Backlog'}
                title={'MEDIUM'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'MEDIUM' && c.Status == 'BACKLOG')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'Backlog'}
                title={'LOW'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'LOW' && c.Status == 'BACKLOG')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
            </SectionList>
          </div>
          <div className="flex flex-col mr-10 ml-10 mt-5 gap-2 basis-1/3 ">
            <SectionList title={'In Progress'}>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'In Progress'}
                title={'HIGH'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'HIGH' && c.Status == 'INPROGRESS')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'In Progress'}
                title={'MEDIUM'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'MEDIUM' && c.Status == 'INPROGRESS')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'In Progress'}
                title={'LOW'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'LOW' && c.Status == 'INPROGRESS')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
            </SectionList>
          </div>
          <div className="flex flex-col ml-10 mt-5 gap-2 basis-1/3">
            <SectionList title={'Completed'}>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'Complete'}
                title={'HIGH'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'HIGH' && c.Status == 'COMPLETE')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'Complete'}
                title={'MEDIUM'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'MEDIUM' && c.Status == 'COMPLETE')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
              <TaskList
                setTodos={setTodos}
                sectionTitle={'Complete'}
                title={'LOW'}
              >
                {todos
                  .filter((c) => {
                    if (c.Priority == 'LOW' && c.Status == 'COMPLETE')
                      return true;
                  })
                  .map((c) => (
                    <Task task={c} />
                  ))}
              </TaskList>
            </SectionList>
          </div>
        </div>
        <div className="pt-2 flex justify-end min-w-[100vh] mr-20">
          <NewTaskButton handleClick={handleClick} />
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This is a modal</p>
        </Modal>
      </ActiveTaskProvider>
    </>
  );
}
