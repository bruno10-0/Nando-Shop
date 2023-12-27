"use client"

import Hero from "@/components/heros/Hero";
import ProductsList from "@/components/products/ProductsList";
import ProductsOffers from "@/components/products/productsOffers/ProductsOffers";
import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
    const themeStorage: string = localStorage.getItem('nandoshop_theme') || 'nando';
    const htmlDom = document.querySelector('html');
    htmlDom?.setAttribute('data-theme', themeStorage);

  },[])

  return (
    <>
      <div className="container mx-auto mb-10 ">
        

          <Hero />
          <ProductsOffers /> 
          <ProductsList  />
      </div>
    </>
  ) 
}
