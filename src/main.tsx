import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/themeContext.tsx'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  )
} else {
  ReactDOM.hydrateRoot(
    rootElement,
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  )
}
