import { FC, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { Container, Button } from '@components/ui'
import { Product } from '@common/types/product'
import { ProductSlider, Swatch } from '@components/product'
import { Choices, getVariant } from '../helpers'
import { useUI } from '@components/ui/context'
import s from './ProductView.module.css'

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChices] = useState<Choices>({})
  const { openSidebar } = useUI()

  const variant = getVariant(product, choices)

  const addToCart = () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: variant?.id,
        varinatOptions: variant?.options,
      }

      alert(JSON.stringify(item))
      openSidebar()
    } catch (error) {}
  }

  return (
    <Container>
      <div className={cn(s.root, 'fit', 'mb-5')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality='85'
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option) => (
              <div className='pb-4' key={option.id}>
                <h2 className='uppercase font-medium'>{option.displayName}</h2>
                <div className='flex flex-row py-4'>
                  {option.values.map((optionVal) => {
                    const activeChoice =
                      choices[option.displayName.toLowerCase()]

                    return (
                      <Swatch
                        key={`${option.id}-${optionVal.label}`}
                        color={optionVal.hexColor}
                        label={optionVal.label}
                        variant={option.displayName}
                        active={optionVal.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              optionVal.label.toLowerCase(),
                          })
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <div className='pb-14 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <Button className={s.button} onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
