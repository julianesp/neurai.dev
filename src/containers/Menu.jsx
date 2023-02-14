import React from 'react'

import '@styles/Menu.scss'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <i className="icon-menu burger-button" id="burger-menu"></i>
    
            <ul className="nav">
                <li>
                    <NavLink to='/'>
                        <button>Inicio</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>
                        <button>Sobre mí</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu