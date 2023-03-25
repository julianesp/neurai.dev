import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const NotFound = () => {
    return (

        <Layout>
            <Head>
                <title>No encontrada</title>
            </Head>

            <div>
                <h1 className='not'>Página no encontrada</h1>
            </div>
        </Layout>
    )
}

export default NotFound