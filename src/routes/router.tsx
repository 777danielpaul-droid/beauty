import { createBrowserRouter } from 'react-router'
import RootLayout from './../root'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import DnaPage from './DnaPage'
import ExperimentePage from './ExperimentePage'
import ProduktePage from './ProduktePage'
import WeltenPage from './WeltenPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    ErrorBoundary: () => <h1>404 — Page not found</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'dna', element: <DnaPage /> },
      { path: 'experimente', element: <ExperimentePage /> },
      { path: 'produkte', element: <ProduktePage /> },
      { path: 'welten', element: <WeltenPage /> },
    ],
  },
])
