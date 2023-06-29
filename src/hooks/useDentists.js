import {useEffect, useState} from 'react'
import searchDentists from '../service/dentists'
import data from '../mocks/dentists.json'

function useDentists({endpoint}) {
  const [dentists, setDentists] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        // el timeout de 500ms sirve para mostrar el spinner durante la consulta
        const timeOut = setTimeout(async () => {
          const dentistsData = await searchDentists({endpoint})
          console.log('Fetched data')
          setDentists(dentistsData)
          setLoading(false)
        }, 500)
      } catch (error) {
        setError(true)
      }
    }
    getData()
  }, [])

  return {dentists, loading, error}
}
export default useDentists
