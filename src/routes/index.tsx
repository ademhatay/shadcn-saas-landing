import HomePage from '@/features/home/view/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
}) 