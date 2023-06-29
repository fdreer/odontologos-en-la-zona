import {useState} from 'react'
import {Card, ListCards} from '../UI/Cards'
import {isInStorage, saveFav} from '../logic/storage'
import {Link, useParams} from 'react-router-dom'

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

export function DentistInfo({dentist}) {
  const [isFav, setIsFav] = useState(isInStorage(dentist.id))

  const classHeart = isFav
    ? 'heart fav fa-solid fa-heart'
    : 'heart fa-solid fa-heart'

  const onFav = () => {
    saveFav(dentist) // guarda el dentista en el localstorage
    setIsFav(!isFav) // cambia el estado de isFav
  }

  return (
    <>
      <section
        style={{
          gap: '10px',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: '10px',
          top: '10px',
        }}
      >
        <i className={classHeart} onClick={onFav}></i>
        <Link to={`/dentists/${dentist.id}`}>
          <i className="fa-solid fa-circle-info more-info link"></i>
        </Link>
      </section>

      <img
        src="../../src/assets/avatar-default-symbolic-svgrepo-com.svg"
        style={{overflow: 'hidden', width: '80px', height: '80px'}}
      />
      <h3 style={{margin: '10px 0'}}>{dentist.name}</h3>
      <p>{dentist.address.city}</p>
    </>
  )
}

export function DentistsDetails() {
  const params = useParams()
  const [dentist, setDentist] = useState()

  // useEffect(() => {
  //   setDentist(newDentist)
  // }, [])

  return <>{dentist && <DentistInfo dentist={dentist} />}</>
}
