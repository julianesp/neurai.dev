import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import dev from '../assets/img/developer_2.jpg'
import cirp from '../assets/img/empresas/cirp.png'
import awaspa from '../assets/img/empresas/awaspa.png'
import ase from '../../public/logo.jpg'
import sena from '../assets/img/education/sena.png'
import platzi from '../assets/img/education/platzi.jpg'
import ibero from '../assets/img/education/ibero.jpg'

import styles from '../styles/Profile.module.scss'
import Link from 'next/link'

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

                    <Image
                        className={styles.me}
                        alt='Julián España - Desarrollador Frontend'
                        src={dev}
                    />
                </section>

                {/* <section className={styles.presentation}>
                    <Image
                        className={styles.me}
                        alt='Julián España - Desarrollador Frontend'
                        src={dev}
                    />
                </section> */}

                <section className={styles.study}>

                    <h2>Formación</h2>

                    <section className={styles.study__container}>

                        <article className={styles['study--areas']}>

                            <div className={styles.enlaceEstudio}>
                                
                                <p>Técnico en sistemas</p>

                                <Link href=''>Ver</Link>

                            </div>

                            <Image
                                alt='Técnico en sistemas'
                                src={sena}
                            />
                        </article>

                        <article className={styles['study--areas']}>
                            <p>Tecnólogo Análisis de sistemas</p>
                            <Image
                                alt='Tecnólogo Análisis de sistemas'
                                src={sena}
                            />
                        </article>

                        <article className={styles['study--areas']}>
                            <p>Desarrollador Frontend - Platzi</p>
                            <Link href='Desarrollador Frontend - Platzi'>
                            </Link>
                            <Image
                                alt=''
                                src={platzi}
                            />
                        </article>

                        <article className={styles['study--areas']}>
                            <p>Ingeniería de Software</p>
                            <Image
                                alt='Ingeniería de Software'
                                src={ibero}
                            />
                        </article>

                    </section>

                </section>

            </section>

            <section className={styles.portfolio}>

                <h3>Mis proyectos</h3>

                <div className={styles['portfolio__empresas']}>
                    <div className={styles.empresa}>
                        <Link href='https://julianesp.github.io/cirp/' target='_blank' rel='noreferrer'>
                            <Image
                                src={cirp}
                                alt="Logo CIRP"
                                width={90}
                                height={90}
                            />
                        </Link>

                    </div>

                    <div className={styles.empresa}>
                        <Link href='https://julianesp.github.io/awaspa/' target='_blank' rel='noreferrer'>
                            <Image
                                src={awaspa}
                                alt="Logo Awaspa"
                                width={90}
                                height={90}
                            />
                        </Link>
                    </div>

                    <div className={styles.empresa}>
                        <Link href='https://julianesp.github.io/ase/' target='_blank' rel='noreferrer'>
                            <Image
                                src={ase}
                                alt="Logo Awaspa"
                                width={90}
                                height={90}
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile