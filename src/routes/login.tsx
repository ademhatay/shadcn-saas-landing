import LoginPage from '@/features/auth/login/view/LoginPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: LoginPage,
}) 