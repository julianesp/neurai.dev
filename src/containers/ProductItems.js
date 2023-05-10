import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductItems({ product, addToCartHandler }) {
    return (
        <div className='card'>
            <Link href={`../pages/products/${product.slug}`}>

                <Image
                    src={product.image}
                    alt={product.name}
                    className="rounded shadow object-cover h-64 w-full"
                    width={150}
                    height={150}
                />
            </Link>

            <div className=" card flex flex-col items-center justify-center p-5">
                <Link href={`../pages/products/${product.slug}`}>
                    <h2 className="text-lg">{product.name}</h2>
                </Link>
                <p className="mb-2">{product.brand}</p>
                <p>${product.price}</p>
                <p>{product.atributos.description}</p>
                <button
                    className="primary-button"
                    type="button"
                    onClick={() => addToCartHandler(product)}
                >
                    Add to cart
                </button>
            </div>
        </div >
    )
}
