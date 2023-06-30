import {useParams} from 'react-router-dom'
import useDentists from '../hooks/useDentists'
import {useEffect} from 'react'
import LoadingSpinner from '../UI/LoadingSpinner'
import {BoxStyled} from '../UI/Cards'
import {API_USERS} from '../constants/API'
import {BoxDetails} from '../components/Dentists'

export function DentistDetail() {
  const params = useParams()
  const {dentists, loading, getData} = useDentists({
    endpoint: `${API_USERS}/${params.id}`,
  })

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section style={{display: 'flex', justifyContent: 'center'}}>
          <BoxStyled>
            <BoxDetails dentist={dentists} />
          </BoxStyled>
        </section>
      )}
    </>
  )
}
