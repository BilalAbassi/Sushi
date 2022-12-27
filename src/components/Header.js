import React from 'react'
import {Link} from 'react-router-dom'
import images from '../assets/logo.jpg'
import '../style/Navebar.css'
import { useState,useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  const [click,setclick]=useState(false)
  useEffect(()=>{console.log("working")},[click])
  function changes(){setclick(!click)}
  return (
    <div className={click===false ? 'head':'king'}>
        <div className='logo'> <img src={images}></img></div>
        <div className='link_container'>
          <div className={click===false ?'hide':'link'}>
          <Link to='/' className='e'>Home</Link>
          <Link to='menu/' className='e'>Menu</Link>
          <Link className='e' to={'about/'}>About</Link>
          <Link className='e' to={'contact/'}>Contact</Link></div>        
        </div>
        <div className='icon-div' onClick={changes}> 
        <MenuIcon className='k'/>
        </div>


    </div>
  )
}

export default Header