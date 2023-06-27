import {Link} from 'react-router-dom'
import {styled} from 'styled-components'
import ButtonTheme from './ButtonTheme'

function Header({themeContext}) {
  return (
    <header
      style={{
        backgroundColor: '#1c1c1c',
        position: 'fixed',
        top: 0,
        width: '100%',
      }}
    >
      <nav style={{width: '100%'}}>
        <HeaderStyled>
          <i
            className="fa-solid fa-tooth"
            style={{fontSize: '40px', color: '#fff'}}
          ></i>
          <Link className="link" to="/">
            <li>INICIO</li>
          </Link>
          <Link className="link" to="/favoritos">
            <li>FAVORITOS</li>
          </Link>
          <Link className="link" to="/contacto">
            <li>CONTACTO</li>
          </Link>
          <ButtonTheme themeContext={themeContext} />
        </HeaderStyled>
      </nav>
    </header>
  )
}

export const HeaderStyled = styled.ul`
  padding: 30px;
  width: 50%;
  margin: 0 auto;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1c1c1c;
`
export default Header
