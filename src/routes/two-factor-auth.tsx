import { createFileRoute } from '@tanstack/react-router'

// NOTE: The real component will be imported here
export const Route = createFileRoute('/two-factor-auth')({
  component: () => <div>Two-factor authentication page - Under construction</div>,
})
