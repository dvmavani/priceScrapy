import { Product } from '@/types'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface Props{
  product:Product
}
function ProductCard({product}:Props) {
  return (
    <Link className="product-card" href={`/products/${product._id}`}>
      <div className='prodct-card_img-container'>
        <Image 
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="product-card_img"
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='product-title'>
          {product.title}
        </h3>
        <div className='flex justify-between'>
          <p className='text-black opacity-50 text-lg capitalize'>
            {product.category}
          </p>
          <p className='text-black  text-lg font-semibold capitalize'>
            <span>{product?.currency}</span>
            <span>{product?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard