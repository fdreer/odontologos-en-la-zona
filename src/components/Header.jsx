import {Link} from 'react-router-dom'
import {styled} from 'styled-components'
import ButtonTheme from './ButtonTheme/ButtonTheme'

const HeaderStyled = styled.ul`
  padding: 25px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1c1c1c;
`

const ButtonHeader = styled.ul`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 15px;
`

function Header({themeContext}) {
  return (
    <header
      style={{
        backgroundColor: '#1c1c1c',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: '999',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '970px',
          margin: '0 auto',
        }}
      >
        <HeaderStyled>
          <i className="fa-solid fa-tooth tooth"></i>
          <Link className="link" to="/">
            <ButtonHeader>
              <i className="fa-solid fa-house"></i>
              <span>HOME</span>
            </ButtonHeader>
          </Link>
          <Link className="link" to="/favoritos">
            <ButtonHeader>
              <i className="fa-solid fa-heart"></i>
              <span>FAVORITOS</span>
            </ButtonHeader>
          </Link>
          <Link className="link" to="/contacto">
            <ButtonHeader>
              <i className="fa-solid fa-address-book"></i>
              <span>CONTACTO</span>
            </ButtonHeader>
          </Link>
        </HeaderStyled>
        <ButtonTheme themeContext={themeContext} />
      </nav>
    </header>
  )
}

export default Header
