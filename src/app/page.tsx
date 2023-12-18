"use client"

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
        <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in recusandae ex aliquam nam officiis 
          alias at praesentium. Laborum libero error sit vel at, autem culpa optio fuga aut. Esse?
           
        </h1>
      </div>
    </>
  ) 
}
