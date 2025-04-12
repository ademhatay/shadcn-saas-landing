import { createFileRoute } from '@tanstack/react-router'

// NOT: Burada gerçek bileşeni import edilecek
export const Route = createFileRoute('/two-factor-auth')({
  component: () => <div>İki faktörlü kimlik doğrulama sayfası - Yapım aşamasında</div>,
}) 