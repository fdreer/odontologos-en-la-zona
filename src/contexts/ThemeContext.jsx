import {useState} from 'react'
import {createContext} from 'react'
import {getThemeFromStorage, saveThemeInStorage} from '../logic/storage'

export const ThemeContext = createContext(ThemeProvider)

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(getThemeFromStorage)

  function changeTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    saveThemeInStorage(newTheme)
  }

  const value = {
    theme,
    changeTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
