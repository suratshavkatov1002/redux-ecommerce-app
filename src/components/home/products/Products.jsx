import React, { useState } from 'react'
import {products} from '../../assets/data/data'
import Heading from '../../common/Heading'
import ProductsItem from './ProductsItem'



const Products = () => {

  const [data, setData] = useState(products)

  return (
    <>
        <section className="product">
            <div className="container">
                <Heading title="Trendings Products" desc = "Check the hottest designs of the week. These rising stars are worth your attention." />

                <ProductsItem data = {data} />
            </div>
        </section>
    </>
  )
}

export default Products