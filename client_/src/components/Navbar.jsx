import React from 'react'

const Navbar = () => {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout","_self");
    
  }
  return (
    <div className='navbar'>
       <h1 className='logo'>SSO App</h1>
       <ul className='list'>
        <li className='listItem'>User Name</li>
        <li className='listItem'>LogOut</li>
       </ul>
    </div>
  )
}

export default Navbar
