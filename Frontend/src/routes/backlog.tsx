import { createFileRoute } from '@tanstack/react-router';
import { BacklogPage } from '../pages/backlog-page';

export const Route = createFileRoute('/backlog')({
  component: BacklogPage,
});
