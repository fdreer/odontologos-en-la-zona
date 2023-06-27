import {useContext} from 'react'
import useDentists from '../hooks/useDentists'
import {ListOfDentists} from '../components/Dentists'
import {DentistsContext} from '../contexts/DentistsContext'
import LoadingSpinner from '../UI/LoadingSpinner'

function Home() {
  const {loading} = useDentists()
  const dentists = useContext(DentistsContext).dentists

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 style={{fontSize: '2rem'}}>DENTISTAS EN LA ZONA 😈🔥</h2>
          <ListOfDentists dentists={dentists} />
        </>
      )}
    </>
  )
}

export default Home
