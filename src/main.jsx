import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from './contexts/ThemeContext.jsx'
import {DentistsProvider} from './contexts/DentistsContext.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <DentistsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DentistsProvider>
  </ThemeProvider>
)
