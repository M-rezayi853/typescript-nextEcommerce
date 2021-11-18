import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Product } from '@common/types/product'
import s from './ProductCard.module.css'

interface Props {
  product: Product
  variant?: 'simple' | 'slim'
}

const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: FC<Props> = ({ product, variant = 'simple' }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        {variant === 'slim' ? (
          <>
            <div className='absolute inset-0 z-20 flex justify-center items-center'>
              <span className='bg-black text-white p-3 font-bold text-xl'>
                {product.name}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                src={product.images[0].url ?? placeholderImage}
                alt={product.name ?? 'Product image'}
                height={320}
                width={320}
                quality='85'
                layout='fixed'
              />
            )}
          </>
        ) : (
          <>
            <div className={s.productBg}></div>
            <div className={s.productTag}>
              <h3 className={s.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={s.productPrice}>
                {product.price.value} {product.price.currencyCode}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                src={product.images[0].url ?? placeholderImage}
                alt={product.name ?? 'Product image'}
                width={540}
                height={540}
                quality='85'
                layout='responsive'
              />
            )}
          </>
        )}
      </a>
    </Link>
  )
}

export default ProductCard
