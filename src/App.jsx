import {Outlet, useRoutes} from 'react-router'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {useContext} from 'react'
import {ThemeContext} from './contexts/ThemeContext'
import Home from './routes/Home'
import Favs from './routes/Favs'
import ContactPage from './routes/ContactPage'
import {DentistDetails} from './components/Dentists'

function App() {
  const themeContext = useContext(ThemeContext)

  const router = useRoutes([
    {
      path: '/',
      element: (
        <>
          <Header themeContext={themeContext} />
          <main className={themeContext.theme}>
            <Outlet />
          </main>
          <Footer />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {path: 'dentists/:id', element: <DentistDetails />},
        {path: 'contacto', element: <ContactPage />},
        {
          path: 'favoritos',
          element: <Favs />,
        },
      ],
    },
  ])

  return <>{router}</>
}

export default App
