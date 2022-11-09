import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
        <NavLink to='/home'><h1>Tattooteca</h1></NavLink>
        <div>
            <NavLink to='/home'><p>Kezdolap</p></NavLink>
            <NavLink to='/styles'><p>Stilusok</p></NavLink>
            <NavLink to='/artists'><p>Muveszek</p></NavLink>
            <NavLink to='/studios'><p>Studiok</p></NavLink>
        </div>
    </nav>
  )
}

export default Header