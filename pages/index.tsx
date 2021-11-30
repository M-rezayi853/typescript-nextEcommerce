import React from 'react'
import type { InferGetStaticPropsType } from 'next'

import { getAllProducts } from '@framework/product'
import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Hero, Marquee } from '@components/ui'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      <Hero
        headline='Cookies, ice cream and muffin'
        description='Fruitcake gummies donut pastry sweet roll toffee gummies macaroon marshmallow. Ice cream halvah croissant carrot cake bonbon jelly beans. Ice cream candy gummies donut donut sweet roll halvah apple pie bear claw. Lemon drops bear claw chocolate dessert cotton candy fruitcake jujubes jelly. Fruitcake gummies brownie tootsie roll chocolate cake. Muffin pie topping croissant halvah dessert. Jelly-o carrot cake cupcake soufflé donut fruitcake pudding bonbon ice cream. Liquorice bonbon caramels dragée gingerbread jelly beans topping. Bonbon pastry sweet roll gummi bears jelly-o powder tiramisu. Candy canes sugar plum shortbread pastry caramels pastry brownie.'
      />

      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard variant='slim' key={product.id} product={product} />
        ))}
      </Marquee>

      <Grid layout='B'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      <Marquee variant='secoundary'>
        {products.slice(0, 3).map((product) => (
          <ProductCard variant='slim' key={product.id} product={product} />
        ))}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
