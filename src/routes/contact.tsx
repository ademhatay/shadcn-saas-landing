import ContactPage from '@/features/contact/view/ContactPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
}) 