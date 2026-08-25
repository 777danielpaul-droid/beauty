import { createBrowserRouter } from 'react-router'
import RootLayout from './../root'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    ErrorBoundary: () => <h1>404 — Page not found</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
