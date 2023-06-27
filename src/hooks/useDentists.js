import {useEffect, useState} from 'react'
import searchDentists from '../service/dentists'

function useDentists() {
  const [dentists, setDentists] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const timeOut = setTimeout(async () => {
          const dentistsData = await searchDentists()
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
