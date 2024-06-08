import {useState, useEffect} from "react"
import{Navbar, Container, Nav, } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'

const NavBar = ()=>{
const [activeLink,setActiveLink] = useState('home')
const [scrolled, setScrolled] = useState (false)

useEffect(()=>{
  const onScroll = ()=>{
    if(window.scrollY>50){
      setScrolled(true)
    } else{
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', onScroll)
  return ()=>window.removeEventListener('scroll', onScroll)
},[])

const onUpdateActiveLink = (value)=>{
  setActiveLink(value)
}

return (
    <Navbar expand="lg" className={scrolled ? 'scrolled':''}>
      <Container>
        <Navbar.Brand href="#/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink ('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink ('about')}>About</Nav.Link>
            <Nav.Link href="#skill" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink ('skill')}>Skill</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink ('project')}>Project</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
              <a href=""><img src={NavIcon1}></img></a>
              <a href=""><img src={NavIcon2}></img></a>
              <a href=""><img src={NavIcon3}></img></a>
            </div>
            <button className='tombol' onClick={()=> console.log ('connect')}>lets connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}

export default NavBar