import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { ITask } from '../models/task';

const ActiveTaskContext = createContext<
  | {
      activeTask: ITask | undefined;
      setActiveTask: Dispatch<SetStateAction<ITask | undefined>>;
    }
  | undefined
>(undefined);

export function ActiveTaskProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTask, setActiveTask] = useState<ITask | undefined>(undefined);

  return (
    <ActiveTaskContext.Provider value={{ activeTask, setActiveTask }}>
      {children}
    </ActiveTaskContext.Provider>
  );
}

export function useActiveTask() {
  return useContext(ActiveTaskContext);
}
