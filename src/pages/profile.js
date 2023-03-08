import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import dev from '../assets/img/developer_2.jpg'
import cirp from '../assets/img/empresas/cirp.png'
import awaspa from '../assets/img/empresas/awaspa.png'
import Head from 'next/head'
import styles from '../styles/Profile.module.scss'

const Profile = () => {
    return (
        <>
            <Head>
                <title>Mi perfil</title>
            </Head>

            <section className={styles.dev}>

                <section className={styles.description}>
                    <p>
                        <span>Hola,</span> 
                        <span>soy Julián,</span>
                        <span>desarrollador web</span>
                    </p>
                </section>

                <section className={styles.presentation}>
                    <Image
                        className={styles.me}
                        alt='Julián España - Desarrollador Frontend'
                        src={dev}
                    />
                </section>


                <section className={styles.study}>
                    {/* <h2>Mis logros</h2> */}
                </section>

            </section>

            <section className={styles.portfolio}>
                <div className={styles.title}>
                    <h3>Mis proyectos</h3>
                </div>
                <div className={styles['empresa-container']}>
                    <div className={styles.empresa}>

                        <Image
                            src={cirp}
                            alt="Logo CIRP"
                            width={50}
                            height={50}
                        />

                    </div>
                    <a href="https://julianesp.github.io/cirp/" target="_blank" rel='noreferrer'>Visitar CIRP</a>
                    <div className={styles.empresa}>

                        <Image
                            src={awaspa}
                            alt="Logo Awaspa"
                            width={50}
                            height={50}
                        />
                    </div>
                    <a href="https://julianesp.github.io/awaspa/" target='_blank' rel='noreferrer'>Visitar Awaspa</a>
                </div>
            </section>
        </>
    )
}

export default Profile