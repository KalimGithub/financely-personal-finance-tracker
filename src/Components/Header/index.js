import React from 'react'
import './styles.css'
function Header() {
    function logoutfunc(){
        alert('logout!')
    }
  return (
    <div className='navbar'>
       <p className='logo'>Financely.</p> 
       <p className='logo link' onClick={logoutfunc}>Logout</p> 
    </div>
  )
}

export default Header