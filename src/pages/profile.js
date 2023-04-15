import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import dev from '../assets/img/developer_2.jpg'
import cirp from '../assets/img/empresas/cirp.png'
import awaspa from '../assets/img/empresas/awaspa.png'
import ase from '../../public/logo.jpg'
// import sena from '../assets/img/education/sena.png'
// import platzi from '../assets/img/education/platzi.jpg'
// import ibero from '../assets/img/education/ibero.jpg'
import tecSistemas from '../../public/estudios/tecSistemas.png'

import ImageShow from '../components/ImageShow'
// import { ItemsContainer } from '../components/ItemsContainer'

import styles from '../styles/Profile.module.scss'


const Profile = () => {

    const [showImage, setShowImage] = useState(false)

    const handleButtonClick = () => {
        setShowImage(!showImage)
        // setShowImage(true)
    }

    const handleCloseClick = () => {
        setShowImage(false)
    }

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

                <section className={styles.study}>

                    <h2>Formación</h2>

                    <section className={styles.study__container}>

                        <article className={styles['study--areas']}>

                            <p id='titulo'>Técnico <br /> en sistemas</p>
                            
                            

                            <button
                                className={styles['image-button']} onClick={handleButtonClick}>
                                Ver
                            </button>

                            {
                                showImage &&
                                (
                                    <>
                                        <div className="cerrar">
                                            
                                            <ImageShow
                                                src={tecSistemas}
                                                alt='tecnico'
                                                onClose={handleCloseClick} />

                                                <button
                                                    className={styles['image-button--cerrar']}
                                                    onClick={handleButtonClick}
                                                >
                                                    X
                                                </button>

                                        </div>

                                    </>

                                )

                            }

                        </article>

                        <article className={styles['study--areas']}>

                            <p>Técnico <br /> en sistemas</p>

                            <button
                                className={styles['image-button']} onClick={handleButtonClick}>
                                Ver
                            </button>

                            {
                                showImage &&
                                (
                                    <>
                                        <div className="cerrar">
                                            
                                            <ImageShow
                                                src={tecSistemas}
                                                alt='tecnico'
                                                onClose={handleCloseClick} />

                                                <button
                                                    className={styles['image-button--cerrar']}
                                                    onClick={handleButtonClick}
                                                >
                                                    X
                                                </button>

                                        </div>

                                    </>

                                )

                            }

                        </article>

                        <article className={styles['study--areas']}>

                            <p>Técnico <br /> en sistemas</p>

                            <button
                                className={styles['image-button']} onClick={handleButtonClick}>
                                Ver
                            </button>

                            {
                                showImage &&
                                (
                                    <>
                                        <div className="cerrar">
                                            
                                            <ImageShow
                                                src={tecSistemas}
                                                alt='tecnico'
                                                onClose={handleCloseClick} />

                                                <button
                                                    className={styles['image-button--cerrar']}
                                                    onClick={handleButtonClick}
                                                >
                                                    X
                                                </button>

                                        </div>

                                    </>

                                )

                            }

                        </article>

                        <article className={styles['study--areas']}>

                            <p>Técnico <br /> en sistemas</p>

                            <button
                                className={styles['image-button']} onClick={handleButtonClick}>
                                Ver
                            </button>

                            {
                                showImage &&
                                (
                                    <>
                                        <div className="cerrar">
                                            
                                            <ImageShow
                                                src={tecSistemas}
                                                alt='tecnico'
                                                onClose={handleCloseClick} />

                                                <button
                                                    className={styles['image-button--cerrar']}
                                                    onClick={handleButtonClick}
                                                >
                                                    X
                                                </button>

                                        </div>

                                    </>

                                )

                            }

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