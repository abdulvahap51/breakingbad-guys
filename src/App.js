import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Qutes from './pages/Qutes'
import { Nav,NavItem,NavLink } from 'reactstrap'




function App() {
  return (
    <>
   <Nav
  fill
  pills
  className='navbar'
>
  <NavItem className='navitem'>
    
    <Link
      active
      to="/"

    >
      <NavLink>CHARACTERS</NavLink>
    </Link>
  </NavItem>
  <NavItem className='navitem'>
    
    <Link to="/qutes">
    <NavLink>QUOTE</NavLink>
      
    </Link>
  </NavItem>
  
</Nav>
    {/* <nav>
      <NavLink  to="/a">anasayfa</NavLink>
      <NavLink to="/contact">contact</NavLink>
      <NavLink to="/block">block</NavLink>
    </nav> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/char/:char_id" element={< Details/>} />
      <Route path="/qutes" element={<Qutes />} />
      
    </Routes>
    </>
  )
}

export default App
