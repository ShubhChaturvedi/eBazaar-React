import React from 'react'
import Navbar from '../components/Navbar'
import ProductsDisplay from '../components/ProductsDisplay'
import Footer from '../components/Footer'

export default function Shop() {
  return (
    <>
    <Navbar/>
    <ProductsDisplay  
    title="All Products"
    />
    <Footer/>
    </>
  )
}
