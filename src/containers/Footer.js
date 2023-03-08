import React from 'react'
import Image from 'next/image'
import linkedin from '/public/network/linkedin.png'
import github from '/public/network/github_2.png'
import twitter from '/public/network/twitter.svg'
import facebook from '/public/network/facebook.png'
import styles from '../styles/Footer.module.scss'

const Footer = () => {

    return (

        <section className={styles.footer}>
            <h3>Contáctame</h3>
            <section className={styles.contactame}>
                <article className={styles.contactame__red}>
                    <Image
                        className={styles.imagen}
                        alt='LinkedIn'
                        src={linkedin}
                    />
                </article>
                <article>
                    <Image
                    className={styles.imagen}
                        alt='GitHub'
                        src={github}
                    />
                </article>
                <article>
                    <Image
                        alt='Twitter'
                        src={twitter}
                    />
                </article>
                <article>
                    <Image
                        alt='Facebook'
                        src={facebook}
                    />
                </article>
            </section>
        </section>
    )
}

export default Footer