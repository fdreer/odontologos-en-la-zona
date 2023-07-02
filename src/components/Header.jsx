import {Link} from 'react-router-dom'
import {styled} from 'styled-components'
import ButtonTheme from './ButtonTheme/ButtonTheme'
import {useRef, useState} from 'react'

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
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleOpen() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div className="main-header">
      <header>
        <Logo />
        <NavBar />
        <ButtonTheme themeContext={themeContext} />
        <MenuBurger handleOpen={handleOpen} />
        <MenuAside isOpen={menuIsOpen} />
      </header>
    </div>
  )
}

function MenuBurger({handleOpen}) {
  return (
    <button className="btn-burger" onClick={handleOpen}>
      <i className="fa-solid fa-bars burger"></i>
    </button>
  )
}

function MenuAside({isOpen}) {
  return (
    <aside className={`menu-aside ${isOpen ? '' : 'hidden'}`}>
      <section>
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
      </section>
    </aside>
  )
}

function Logo() {
  return <i className="fa-solid fa-tooth tooth"></i>
}

function NavBar() {
  return (
    <nav className="navigation-page">
      <HeaderStyled>
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
    </nav>
  )
}

export default Header
