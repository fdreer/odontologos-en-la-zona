import {createContext, useState} from 'react'
import useDentists from '../hooks/useDentists'
import {API_USERS} from '../constants/API'

export const DentistsContext = createContext(DentistsProvider)

export function DentistsProvider({children}) {
  // const {dentists} = useDentists('https://jsonplaceholder.typicode.com/users')
  const [dentists, setDentistss] = useState([])

  const value = {
    dentists,
  }

  return (
    <DentistsContext.Provider value={value}>
      {children}
    </DentistsContext.Provider>
  )
}
