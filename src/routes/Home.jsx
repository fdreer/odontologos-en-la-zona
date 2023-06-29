import useDentists from '../hooks/useDentists'
import {ListOfDentists} from '../components/Dentists'
import LoadingSpinner from '../UI/LoadingSpinner'
import {API_USERS} from '../constants/API'

function Home() {
  const {dentists, loading} = useDentists({
    endpoint: API_USERS,
  })

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 style={{fontSize: '1.8rem'}}>DENTISTAS EN LA ZONA 😈🔥</h2>
          <ListOfDentists dentists={dentists} />
        </>
      )}
    </>
  )
}

export default Home
