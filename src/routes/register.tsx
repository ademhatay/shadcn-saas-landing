import { createFileRoute } from '@tanstack/react-router'

// NOTE: The real component will be imported here
export const Route = createFileRoute('/register')({
  component: () => <div>Register page - Under construction</div>,
})
