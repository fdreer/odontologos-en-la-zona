import {useState} from 'react'
import {ListOfDentists} from '../components/Dentists'
import {getFavs} from '../logic/storage'

function Favs() {
  const [dentistsFavs, setDentistsFavs] = useState(getFavs)

  if (!dentistsFavs || dentistsFavs.length === 0) {
    return (
      <h2 style={{fontSize: '1.8rem'}}>No tienes dentistas favoritos 🙁</h2>
    )
  }

  return (
    <>
      <h2 style={{fontSize: '1.8rem'}}>TUS DENTISTAS PREFERIDOS 😈 🔥</h2>
      <ListOfDentists dentists={dentistsFavs} />
    </>
  )
}
export default Favs
