import {useState} from 'react'
import searchDentists from '../service/dentists'
import data from '../mocks/dentists.json'

function useDentists({endpoint}) {
  const [dentists, setDentists] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function getData() {
    try {
      setLoading(true)

      // Obtengo la data con delay para mostrar el spinner load
      const dentistsData = await getDataWithDelay(500)
      setDentists(dentistsData)
      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }

  async function getDataWithDelay(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        // resolve(data[0]) // mock para more-info
        // resolve(data) // mock para home
        resolve(searchDentists({endpoint})) // fetch api
      }, ms)
    })
  }

  return {dentists, loading, getData}
}
export default useDentists
