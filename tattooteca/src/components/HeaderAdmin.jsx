import React from 'react';
import { NavLink } from 'react-router-dom';


function HeaderAdmin() {
  return (
    <nav>
        <div>
            <h1>Tattooteca</h1>
        </div>
        <div>
            <NavLink to='/admin'>Kezdolap</NavLink>
            <NavLink to='/style-admin'>Stilusok</NavLink>
            <NavLink to='/artist-admin'>Muveszek</NavLink>
            <NavLink to='/studio-admin'>Studiok</NavLink>
        </div>
    </nav>
  )
}

export default HeaderAdmin