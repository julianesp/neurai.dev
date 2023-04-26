import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import notFound from '../assets/img/not_found.png'
import styles from '../styles/404.module.scss'

const NotFound = () => {
    return (

        <Layout>
            <Head>
                <title>No encontrada</title>
            </Head>

            <section className={styles.container}>
                <h1 >Página no encontrada</h1>
                <Image
                    className={styles.notFound}
                    alt='Imagen to page not found'
                    src={notFound}
                />
            </section>
        </Layout>
    )
}

export default NotFound