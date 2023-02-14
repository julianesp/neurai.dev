import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dev from '../assets/img/cerebro.svg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
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

      <menu>
        <Link href='/'>Inicio</Link>
        {/* <Link href='/profile'>Sobre mí</Link> */}
      </menu>

    </nav>
  )
}

export default NavBar