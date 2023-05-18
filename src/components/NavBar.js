import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dev from '../assets/img/cerebro.svg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {

  const [menuAbierto, setMenuAbierto] = useState(false)

  const handleClick = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (

    <nav className={styles.container}>

      <div className={styles.logo}>
        <Image
          className={styles['logo-img']}
          alt='Logo'
          src={dev}
          width={50}
          height={50}
        />
      </div>

      <button className="icon-menu" onClick={handleClick}></button>

      <menu className={`${styles.menuNav} ${menuAbierto ? styles.open : ''}`}>
        <Link href='/'>Inicio</Link>
        <Link href='/store'>Tienda</Link>
        <Link href='/blog'>Blog</Link>
      </menu>

    </nav>
  )
}

export default NavBar