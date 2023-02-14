import React from 'react'
import Image from 'next/image'
import dev from '../assets/img/presentacion/park.jpg'
import sena1 from '../assets/img/logos/sena.png'
import platzi from "../assets/img/logos/platzi.jpg"
import park from '../assets/img/presentacion/park.jpg'
import '../styles/_colors.module.scss'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (        
            <div className={styles.footer}>
                
                {/* <Image className={styles['footer-img']} src={park} alt="Parque Colón Putumayo" /> */}

                <section className={styles.info}>
                    <div className={styles.education}>
                        <h4>Desarrollado por:<br />Julián España</h4>
                        <h5>Técnico en sistemas </h5>
                        <Image
                            src={dev}
                            alt="Logo SENA"
                            width={50}
                            height={50}
                        />
                        <h5>Tecnólogo en Análisis de sistemas</h5>
                        <Image
                            src={sena1}
                            alt="Logo SENA"
                            width={50}
                            height={50}
                        />
                        <h5>Desarrollador Front-End</h5>
                        <Image
                            src={platzi}
                            alt="Logo Platzi"
                            width={50}
                            height={50}
                        />
                        <h5>Parque</h5>
                        <Image
                            src={park}
                            alt="Logo Platzi"
                            width={50}
                            height={50}
                        />
                    </div>
                </section>
            </div>
        
    )
}

export default Footer