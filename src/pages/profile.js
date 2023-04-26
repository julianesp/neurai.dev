import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

// import Estudios from '../components/Estudios'

import dev from '../assets/img/developer_2.jpg'
import cirp from '../assets/img/empresas/cirp.png'
import awaspa from '../assets/img/empresas/awaspa.png'
import ase from '../assets/img/empresas/ase.jpg'
// import sena from '../assets/img/education/sena.png'
// import platzi from '../assets/img/education/platzi.jpg'
// import ibero from '../assets/img/education/ibero.jpg'
import tecni from '../assets/img/education/tecnicosistemas.jpg'
import tecno from '../assets/img/education/tecnologia.png'

import styles from '../styles/Profile.module.scss'

const Profile = () => {

    const [showImage, setShowImage] = useState(false)
    const [showImage1, setShowImage1] = useState(false)

    const toggleImage1 = () => {
        setShowImage1(!showImage1)
    }
    const toggleImage = () => {
        setShowImage(!showImage)
    }

    const closeImage = () => {
        setShowImage(false)
    }
    const closeImage2 = () => {
        setShowImage1(false)
    }

    return (

        <>
            <Head>
                <title>Sobre mí</title>
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

                <section className={styles.study}>

                    <h2>Formación</h2>

                    <section className={styles.study__container}>

                        <article className={styles['study--areas']}>

                            <p id='titulo'>Técnico <br /> en sistemas</p>

                            <button
                                className={styles['image-button']}
                                onClick={toggleImage}>Ver</button>

                            {/* {showImage1 && <Image src={tecni} alt="Imagen 1" />} */}

                            {showImage && (
                                <div className="image-modal">
                                    <Image src={tecni} alt="Imagen" />
                                    <button className={styles['image-button--cerrar']} onClick={closeImage}>X</button>
                                </div>
                            )}


                        </article>

                        <article className={styles['study--areas']}>

                            <p id='titulo'>Tecnólogo en <br/> análisis de la información</p>

                            <button
                                className={styles['image-button']}
                                onClick={toggleImage1}>Ver</button>

                            {/* {showImage2 && <Image src={tecno} alt="Imagen 1" />} */}

                            {showImage1 && (
                                <div className="image-modal">
                                    <Image src={tecno} alt="Imagen" />
                                    <button className={styles['image-button--cerrar']} onClick={closeImage2}>X</button>
                                </div>
                            )}

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