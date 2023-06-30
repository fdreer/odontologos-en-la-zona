import {Card, ListCards} from '../UI/Cards'
import {Link} from 'react-router-dom'
import useFavs from '../hooks/useFavs'
import userAvatar from '../assets/avatar-default-symbolic-svgrepo-com.svg'

export function ListOfDentists({dentists}) {
  return (
    <>
      {dentists && (
        <section style={{margin: '30px 0'}}>
          <ListCards>
            {dentists.map(dentist => {
              return (
                <Card key={dentist.id}>
                  <DentistCard dentist={dentist} />
                </Card>
              )
            })}
          </ListCards>
        </section>
      )}
    </>
  )
}

export function DentistCard({dentist}) {
  const {isFav, onFav} = useFavs({dentist})

  const classHeart = isFav
    ? 'heart fav fa-solid fa-heart'
    : 'heart fa-solid fa-heart'

  return (
    <>
      <section className="items-card">
        <i className={classHeart} onClick={onFav}></i>
        <Link to={`/dentists/${dentist.id}`}>
          <i className="fa-solid fa-circle-info more-info link"></i>
        </Link>
      </section>
      <img src={userAvatar} />
      <h3>{dentist.name}</h3>
      <p>{dentist.website}</p>
    </>
  )
}

export function BoxDetails({dentist}) {
  const {isFav, onFav} = useFavs({dentist})

  const classHeart = isFav
    ? 'heart fav fa-solid fa-heart'
    : 'heart fa-solid fa-heart'

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <img src={userAvatar} />
        <h3>{dentist.name}</h3>
        <section
          style={{
            gap: '10px',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            right: '20px',
            top: '20px',
          }}
        >
          <i className={classHeart} onClick={onFav}></i>
          <Link to={`/dentists/${dentist.id}`}>
            <i className="fa-solid fa-circle-info more-info link"></i>
          </Link>
        </section>
      </div>

      <div style={{marginLeft: '20px'}}>
        <p>🌐 {dentist.website}</p>
        <p>✉️ {dentist.email}</p>
        <p>☎️ {dentist.phone}</p>
        <p>
          📍
          {dentist.address && dentist.address.street} -{' '}
          {dentist.address && dentist.address.city}
        </p>
      </div>
    </>
  )
}
