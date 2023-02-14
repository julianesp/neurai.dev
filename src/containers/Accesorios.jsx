import React from 'react'
// import '../styles/Accesorios.scss'
import Image from 'next/image'
import brocha from '../assets/pictures/ellas/brochas/1.jpg' 


const Accesorios = () => {

    return (
        <section className='accesorios'>
            <section className='accesorios-tipo'>
                <div className='visit' id='img1'>
                    <h2>Ellas</h2>                
                    <p>Incluir enlace para dirigirme a los accesorios para ellas</p>
                    <p>crear graphQl para llamar al contenido multimedia</p>
                </div>
                
                <ul className='contenedor'>
                    <li className='caja'>
                        <h3>Brochas maquillaje</h3>
                        <Image
                            alt='muestra de accesorio'
                            width={100}
                            height={100}
                            src={brocha}
                        />
                    </li>
                </ul>

            </section>
        </section>
    )
}

export default Accesorios
