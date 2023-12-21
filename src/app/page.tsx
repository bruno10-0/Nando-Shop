"use client"

import Hero from "@/components/heros/Hero";
import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
    const themeStorage: string = localStorage.getItem('nandoshop_theme') || 'nando';
    const htmlDom = document.querySelector('html');
    htmlDom?.setAttribute('data-theme', themeStorage);

  },[])

  return (
    <>
      <div className="container mx-auto mb-10 flex">
        <Hero />
        <h1>
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </h1>
      </div>
    </>
  ) 
}
