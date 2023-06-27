import {useContext, useMemo, useState} from 'react'
import {Card, ListCards} from '../UI/Cards'
import {isInStorage, saveFav} from '../logic/storage'
import {Link} from 'react-router-dom'
import {DentistsContext} from '../contexts/DentistsContext'

export function ListOfDentists({dentists}) {
  return (
    <>
      {dentists && (
        <section style={{margin: '30px 0'}}>
          <ListCards>
            {dentists.map(dentist => {
              return (
                <Card key={dentist.id}>
                  <DentistInfo dentist={dentist} />
                </Card>
              )
            })}
          </ListCards>
        </section>
      )}
    </>
  )
}

export function ListOfFavs() {
  const dentistsContext = useContext(DentistsContext).dentists

  const dentistsFavs = useMemo(() => {
    console.log('useMemo')
    return dentistsContext.filter(dentist => isInStorage(dentist.id))
  }, [dentistsContext])

  return (
    <>
      {dentistsFavs && (
        <section style={{margin: '30px 0'}}>
          <ListCards>
            {dentistsFavs.map(dentist => {
              return (
                <Card key={dentist.id}>
                  <DentistInfo dentist={dentist} />
                </Card>
              )
            })}
          </ListCards>
        </section>
      )}
    </>
  )
}

export function DentistInfo({dentist}) {
  const [isFav, setIsFav] = useState(isInStorage(dentist.id))

  const classHeart = isFav
    ? 'heart fav fa-solid fa-heart'
    : 'heart fa-solid fa-heart'

  const onFav = () => {
    saveFav(dentist)
    setIsFav(!isFav)
  }

  return (
    <>
      <img
        src="../../src/assets/avatar-default-symbolic-svgrepo-com.svg"
        style={{overflow: 'hidden', width: '80px', height: '80px'}}
      />
      <h3 style={{margin: '0'}}>{dentist.name}</h3>
      <p>Ciudad: {dentist.address.city}</p>
      <section style={{gap: '10px', display: 'flex', alignItems: 'center'}}>
        <i className={classHeart} onClick={onFav}></i>
        <Link to={`/dentists/${dentist.id}`}>
          <i className="fa-solid fa-circle-info more-info"></i>
        </Link>
      </section>
    </>
  )
}

// export function DentistsDetails() {
//   const dentists = useContext(DentistsContext).dentists
//   const params = useParams()
//   const [dentist, setDentist] = useState()

//   // useEffect(() => {
//   //   setDentist(dentists.find(dentist => dentist.id === params.id))
//   // }, [params])

//   return <>{dentist && <DentistInfo dentist={dentist} />}</>
// }
