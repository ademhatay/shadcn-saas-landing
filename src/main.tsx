import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/themeContext.tsx'
import myRouter from './router/index.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
    <RouterProvider router={myRouter} />
  </ThemeProvider>
)
