import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../common/Footer'
import Header from '../common/Header'
import Details from '../home/details/Details'
import Home from '../home/Home'




export const Pages = () => {
  return (
    <>
        <Header/>
        <Routes>
            <Route path = '/' element ={<Home/>} />
            <Route path = '/cart/:id' element ={<Details/>} />
        </Routes>
        <Footer/>
    </>
  )
}
