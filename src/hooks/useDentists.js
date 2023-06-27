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
        const dentistsData = await searchDentists()
        setDentists(dentistsData)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return {dentists, loading, error}
}
export default useDentists
