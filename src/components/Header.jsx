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

const ButtonHeader = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 20px;
`

function Header({themeContext}) {
  return (
    <header className="main-header">
      <nav className="navigation-page">
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
