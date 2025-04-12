import { createFileRoute } from '@tanstack/react-router'

// NOT: Burada gerçek bileşeni import edilecek
export const Route = createFileRoute('/forgot-password')({
  component: () => <div>Şifre sıfırlama sayfası - Yapım aşamasında</div>,
}) 