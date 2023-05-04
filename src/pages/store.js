import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
// import Productos from '../databases/data.json'
import styles from '../styles/Store.module.scss'
import Image from 'next/image'

const store = ({ entradas }) => {

  const productos = require('../databases/data.json')

  const [useProductos, useSetProductos] = useState([])

  const showAcce = async () => {
    const url = productos
    const respuesta = await fetch(url)
    const resultado = await respuesta.json

    console.log(resultado)
  }

  showAcce()
  // useEffect(() => {
  // }, [])

  console.log(entradas)

  return (
    <Layout>
      <section className={styles.container}>
        <h1>tienda</h1>



      </section>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const url = productos
//   const respuesta = await fetch(url)
//   const entradas = await respuesta.json



//   return {
//     props: {
//       entradas
//     }
//   }
// }

export default store