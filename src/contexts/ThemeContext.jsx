import {useState} from 'react'
import {createContext} from 'react'

export const ThemeContext = createContext(ThemeProvider)

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark')

  function changeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const value = {
    theme,
    changeTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
