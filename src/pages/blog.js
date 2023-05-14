import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.scss'
import Head from 'next/head'
import Link from 'next/link'

const blog = () => {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>


            <section className={styles.container}>
                <header>
                    <nav>
                        <ul>
                            {/* <li> */}
                            <Link href="#para" className={styles.enlace}>
                                Paradigmas
                            </Link>

                            <Link href="#lan" className={styles.enlace}>
                                Lenguajes
                            </Link>

                        </ul>
                    </nav>
                </header>

                <article class={styles.temas}>
                    <button id="para">
                        <h2>¿Qué es paradigma?</h2>
                    </button>
                    <p>
                        Hay diferentes tipos de paradigma que se pueden aplicar al desarrollo
                        de software y todos tienen un enfoque diferente, sin embargo,
                        todos comparten el mismo fin, crear la solución para problemas a
                        través del desarrollo de software.
                        <br /><br />
                        A continuación haré una breve descripción de los paradigmas más
                        utilizados:
                        <br /><br />
                    </p>

                    <ul class={styles.paradigmas}>
                        <li>
                            <p>
                                Programación estructurada: este paradigma se centra en
                                descomponer o modularizar
                                <span>(dividir el problema en pequeñas partes),</span>
                                para facilitar el mantenimiento y reutilización del código
                            </p>
                        </li>
                        <li>
                            <p>
                                Programación Orientada a Objetos: este paradigma es utilizado
                                para para sistemas de mayor complejidad ya que se requiere
                                manejar datos y de la misma manera, se debe protegerlos aplicando
                                encapsulamiento <span>(uno de las cuatro características por
                                    las que se caracteriza éste paradigma)</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Programación funcional: así mismo como lo dice su nombre, en éste
                                paradigma se dividen las tareas en funciones, de esta manera,
                                las funciones se podrán usar en más ejercicios similares
                            </p>
                        </li>
                        <li>
                            <p>
                                Programación declarativa: centrado en el resultado final en el cual
                                el desarrollador se encarga de especificar el código de lo que
                                quiere obtener
                            </p>
                        </li>
                    </ul>

                </article>

                <article class={styles.temas}>
                    <h2>
                        <button id="lan">
                            <h2>¿Qué es lenguaje de programación?</h2>
                        </button>
                    </h2>
                    <p>
                        Gracias a los lenguajes de programación es que podemos comunicarnos con
                        las máquinas <span>(procesador, disco duro, RAM, etc)</span>
                        a través de código entendible para nosotros los humanos y de esta manera
                        podemos dar órdenes que serán ejecutadas por el software que se está
                        creando, de la misma manera, también se puede enviar este conjunto de
                        órdenes a dispositivos físicos o hardware, más conocidos como robots
                        que en la actualidad están haciendo más presencia gracias al uso de la
                        Inteligencia Artificial, <a href="https://www.youtube.com/watch?v=Hsv6cmDdt5g" target="_blank"
                            title="Abrir enlace de Youtube">Sophía</a>
                        es un ejemplo de esto.
                    </p>


                    <h3>Lenguajes utilizados en los paradigmas</h3>
                    <ul class={styles.lenguajes}>
                        <li>
                            Programación estructurada: C, Pascal, Algol, Fortran, BASIC
                        </li>
                        <li>
                            Programación Orientada a Objetos: Java, C++, Python, Ruby
                        </li>
                        <li>
                            Programación Funcional: Haskell, Lisp, ML, Erlang, Scala
                        </li>
                        <li>
                            Programación declarativa: SQL, Prolog, Erlang
                        </li>
                    </ul>
                </article>

            </section>
        </Layout>

    )
}

export default blog