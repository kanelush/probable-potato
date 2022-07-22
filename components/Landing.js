import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Landing = ({productos}) => {
  const [val, setVal] = useState('')
  return (
    <section className="text-gray-600 body-font">
      <div className="border-solid mt-8 mx-24 w-1/3 border-4 p-4">
        <input className="" value={val} onChange={(e) => setVal(e.target.value) } placeholder='Buscar producto...'/>
        </div>
      <div className="container px-5 py-20 mx-auto">
      <h1 className="title-font text-4xl font-bold text-gray-700 mb-6 text-center">High Quality Parafernalia!</h1>
      <h1 className="title-font text-2xl font-bold text-gray-700 mb-6 text-center pb-8">Puerto Montt, Chile</h1>
        <div className="flex flex-column flex-wrap -m-4 h-1/3">
          {productos.filter((producto)=> producto.name.toLowerCase().includes(val)).map((producto, i) => {return <>
          <motion.div key={producto.id} initial='first' animate='last' transition={{duration:0.3, delay: i *0.1}} className="p-4 w-1/2 md:w-1/3" whileHover={{
            position:'relative',
            zIndex: 1,
            transition: {
              duration: .1
            }
          }} variants={{
            first: {
              opacity:0,
            },
            last: {
              opacity:1,
            }
          }}>
          <div className="h-full flex-1 rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
            
         <Link href="/detail/[id]" as={`/detail/${producto.id}`}>
            <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={`https://chillin.cl/${producto.image}`} alt="blog"/>
            </Link>
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{ producto.name }</h1>
              <p className="leading-relaxed mb-3">{ producto.description }</p>
              <div className="flex items-center flex-wrap hover:scale-105 ">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg mb-0">Ver más</button>
               
              </div>
            </div>
          </div>
          
        </motion.div>
        </>
          })}
          
            
        </div>
      </div>
      
    </section>
  )
}
