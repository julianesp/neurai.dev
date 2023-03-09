import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import linkedin from '/public/network/linkedin.png'
import github from '/public/network/github.png'
import twitter from '/public/network/twitter.svg'
import facebook from '/public/network/facebook.png'
import whatsapp from '/public/network/whatsapp.svg'
import styles from '../styles/Footer.module.scss'

const Footer = () => {

    return (

        <section className={styles.footer}>
            <h3>Contáctame</h3>
            <section className={styles.contactame}>
                <article className={styles.contactame__red}>
                    <Link href='https://www.linkedin.com/in/julianesprio/' target='_blank'>
                        <Image
                            className={styles.imagen}
                            alt='LinkedIn'
                            src={linkedin}
                            
                        />
                    </Link>
                </article>

                <article>
                    <Link href='https://github.com/julianesp' target='_blank'>
                        <Image
                        className={styles.imagen}
                            alt='GitHub'
                            src={github}
                        />
                    </Link>
                </article>

                <article>
                    <Link href='https://twitter.com/julialexes' target='_blank'>
                        <Image
                            alt='Twitter'
                            src={twitter}
                        />
                    </Link>
                </article>
            </section>
        </section>
    )
}

export default Footer