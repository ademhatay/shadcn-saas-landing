import { createFileRoute } from '@tanstack/react-router'

// NOT: Burada gerçek bileşeni import edilecek
export const Route = createFileRoute('/register')({
  component: () => <div>Register sayfası - Yapım aşamasında</div>,
}) 