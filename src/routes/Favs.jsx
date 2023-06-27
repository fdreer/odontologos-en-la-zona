import {useContext, useMemo} from 'react'
import {ListOfDentists} from '../components/Dentists'
import {DentistsContext} from '../contexts/DentistsContext'
import {isInStorage} from '../logic/storage'

function Favs() {
  const dentistsContext = useContext(DentistsContext).dentists

  // Verificar si conviene el useMemo u otra cosa
  const dentistsFavs = useMemo(() => {
    console.log('useMemo')
    return dentistsContext.filter(dentist => isInStorage(dentist.id))
  }, [dentistsContext])

  if (dentistsFavs.length === 0) {
    return <h2 style={{fontSize: '2rem'}}>No tienes dentistas favoritos 🙁</h2>
  }

  return (
    <>
      <h2 style={{fontSize: '2rem'}}>TUS DENTISTAS PREFERIDOS 😈 🔥</h2>
      <ListOfDentists dentists={dentistsFavs} />
    </>
  )
}
export default Favs
