import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ProductsDisplay from '../components/ProductsDisplay'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import axios from 'axios'
export default function Home() {
  useEffect(() => {
    const getCustomer = async () => {
      const data = await axios.get('http://localhost:8000/getCustomer')
      console.log(data.data)

    }
    getCustomer()
  }, [])
  return (
    <>
    <Navbar/>
    <Carousel/>
    <ProductsDisplay
    title="Popular products"
    />
    <Footer/>
    </>
  )
}
