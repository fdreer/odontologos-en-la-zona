import {useState} from 'react'
import {isInStorage, saveFav} from '../logic/storage'

function useFavs({dentist}) {
  const [isFav, setIsFav] = useState(isInStorage(dentist.id))

  const onFav = () => {
    saveFav(dentist) // guarda el dentista en el localstorage
    setIsFav(!isFav) // cambia el estado de isFav
  }

  return {
    isFav,
    onFav,
  }
}
export default useFavs
