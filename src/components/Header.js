import React from 'react'
import logo from '@img/cerebro.svg'
import { NavLink } from "react-router-dom"
import Image from 'next/image'
// import styles from '../assets/fonts/style.css'
import styles from '../styles/NavBar.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>

            <span className={styles['icon-menu']}></span>

            <div className={styles.logo}>
                <Image 
                    src={logo}
                    alt="Logo de mi tienda"
                />
                {/* <img src={logo} /> */}
                <p>Neurai</p>
            </div>
            
            <nav className='header__contenedor hamburger hamburger--elastic is-active" type="button'>
                <div id="menu">
                    <ul>
                        <li>
                            <NavLink to='/' >
                                <button>Inicio</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div id="menu">
                    <ul>
                        <li>
                            <NavLink to='/pageAcce'>
                                <button>Accesorios</button>
                            </NavLink>
                        </li>
                    </ul>
                </div> */}
                <div id="menu">
                    <ul>
                        <li>
                            <NavLink to='/profile'>
                                <button>Sobre mí</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div id="menu">
                    <ul>
                        <li>
                            <button onClick={''}>Registro</button>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </div>
    )
}

export default Header