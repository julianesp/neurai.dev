import React from 'react'
import Layout from '../components/Layout'
// import Productos from '../databases/data.json'
// import styles from '../styles/Store.module.scss'
// import Image from 'next/image'
import data from '../utils/data'
import ProductItems from '../containers/ProductItems'

export default function Store() {
  return (
    <Layout>
      <h1>tienda</h1>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 my-32 mx-32'>

        {
          data.products.map((product) => (
            <ProductItems product={product} key={product.slug}></ProductItems>
          ))
        }
      </section>
    </Layout>
  )
}