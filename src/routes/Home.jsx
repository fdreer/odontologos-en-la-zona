import {useContext, useEffect} from 'react'
import useDentists from '../hooks/useDentists'
import {ListOfDentists} from '../components/Dentists'
import {DentistsContext} from '../contexts/DentistsContext'

function Home() {
  const {loading} = useDentists()
  const dentists = useContext(DentistsContext).dentists

  return (
    <>
      <h2 style={{fontSize: '2rem'}}>DENTISTAS EN LA ZONA 😈🔥</h2>
      {loading ? <p>Cargando...</p> : <ListOfDentists dentists={dentists} />}
    </>
  )
}

export default Home
