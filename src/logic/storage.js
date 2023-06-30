export const saveFav = data => {
  const existsFavsKey = localStorage.getItem('favs')

  // Caso de que no existan dentistas en el storage
  if (!existsFavsKey) {
    localStorage.setItem('favs', JSON.stringify([data]))
    return
  }

  const existUserInFavs = JSON.parse(existsFavsKey).some(
    fav => fav.id === data.id
  )

  // Caso que el dentista ya este en favoritos, debe eliminarlo del localstorage
  if (existUserInFavs) {
    deleteFav(data.id)
    return
  }

  // Caso de que existan dentistas en el storage
  const favsDentists = JSON.parse(existsFavsKey)
  localStorage.setItem('favs', JSON.stringify([...favsDentists, data]))
  return
}

const deleteFav = id => {
  const favsDentists = JSON.parse(localStorage.getItem('favs'))
  const newFavs = favsDentists.filter(fav => fav.id !== id)
  localStorage.setItem('favs', JSON.stringify(newFavs))
}

export const getFavs = () => {
  return JSON.parse(localStorage.getItem('favs'))
}

// Verifica si el dentista esta en favoritos
export const isInStorage = id => {
  if (localStorage.getItem('favs') === null) {
    return false
  }

  const favsDentists = JSON.parse(localStorage.getItem('favs'))
  return favsDentists.some(fav => fav.id === id)
}

export const getThemeFromStorage = () => {
  if (localStorage.getItem('theme') === null) {
    return 'light'
  }
  return JSON.parse(localStorage.getItem('theme'))
}

export const saveThemeInStorage = theme => {
  localStorage.setItem('theme', JSON.stringify(theme))
}
