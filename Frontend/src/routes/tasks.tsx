import { createFileRoute } from '@tanstack/react-router';
import { TaskPage } from '../pages/task-page';

export const Route = createFileRoute('/tasks')({
  component: TaskPage,
})
