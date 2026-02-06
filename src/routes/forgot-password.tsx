import { createFileRoute } from '@tanstack/react-router'

// NOTE: The real component will be imported here
export const Route = createFileRoute('/forgot-password')({
  component: () => <div>Password reset page - Under construction</div>,
})
