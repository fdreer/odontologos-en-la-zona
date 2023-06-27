import {createContext} from 'react'
import useDentists from '../hooks/useDentists'

export const DentistsContext = createContext(DentistsProvider)

export function DentistsProvider({children}) {
  const {dentists} = useDentists()

  const value = {
    dentists,
  }

  return (
    <DentistsContext.Provider value={value}>
      {children}
    </DentistsContext.Provider>
  )
}
