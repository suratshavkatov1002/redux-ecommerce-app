import React from 'react'
import Banner from './banner/Banner'
import { Blog } from './blog/Blog'
import Details from './details/Details'
import Cart from './hero/Cart'
import Hero from './hero/Hero'
import Price from './price/Price'
import Products from './products/Products'
import Testimonial from './testimonial/Testimonial'
import TopProduct from './topproduct/TopProduct'

const Home = () => {
  return (
    <>
        <Hero/>
        <Cart/>
        <Products/>
        <Banner/>
        <TopProduct/>
        <Price/>
        <Testimonial/>
        <Blog/>
        
    </>
  )
}

export default Home