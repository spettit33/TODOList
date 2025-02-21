import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold text-xl">
          Todoodle
        </Link>{' '}
        <Link to="/tasks" className="[&.active]:font-bold">
          Tasks
        </Link>
        <Link to="/backlog" className="[&.active]:font-bold">
          Backlog
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})