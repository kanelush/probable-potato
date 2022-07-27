import React from 'react'
import { useContext, useState, useEffect } from 'react'
import CartContext from '../context/CartContext'
import axios from 'axios'
import Link from 'next/link'

export const Resumen = () => {
    const { items, handleCartInc, handleCartDec, removeHandler  } = useContext(CartContext)

    const totalPrice = items.reduce((total, item) =>{
      return total + item.price * item.quantity
    }, 0)

    const [total, setTotal] = useState()
    const url = 'https://chillin.cl/api/cart'
    let respo;
    let cart_ship = [];
    const [data, setData] = useState()

    useEffect(() =>{
      axios.all([
        axios.post(url, {'total_price': totalPrice})
        .then(axios.get(url))
        .then((resp) => {
          respo = resp.data
          setData(respo)
          items.forEach(item => {
            if (cart_ship.includes(item)){
              console.log("Existe!!");
            } else {
              cart_ship.push(item)
            }
          });
          
    
          
        })
        .catch((err) => {
          console.log("Err: ",err.response);
        })
        
      ])
    }, [totalPrice])
  return (
    
  
<div className="mt-6  2xl:w-full  ml-0  mb-8 2xl:ml-24 grid-cols-1 2xl:flex">
  <div className="  bg-slate-50 rounded-md  sm:-mx-6 lg:-mx-8 2xl:ml-12 2xl:flex-1 2xl:">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden 2xl:mx-12">
        <h1 className='font-bold text-2xl 2xl:p-4'>Tus Productos</h1>
        <table className="min-w-full">
          <thead className="border-t">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 2xl:px-6 2xl:py-4 text-left border-y border-l">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 2xl:px-6 2xl:py-4 text-left border-y">
                Nombre
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 2xl:px-6 2xl:py-4 text-left border-y">
                Cantidad
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 2xl:px-6 2xl:py-4 text-left border-y">
                Precio
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 2xl:px-6 2xl:py-4 text-left border-y border-r">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            
                {items.map((item) => {
                    return(
                    <>
                    <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-l">
                    <img height="120" width="120" alt="ecommerce" className="hover:scale-105 transition-all rounded border border-gray-200" src={`https://chillin.cl${item.image}`} />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className={`px-2 mx-1 bg-emerald-100 rounded-lg`} onClick={() => handleCartInc(item)}>+</button>
                      {item.quantity}
                      <button className='px-2 mx-1 bg-red-100 rounded-lg' onClick={() => handleCartDec(item)}>-</button>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.price}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                      ${item.quantity * item.price}
                      <button className='px-2 m-x bg-red-100 rounded-lg' onClick={() => removeHandler(item)}>x</button>
                    </td>
                    </tr>
                    </>
                    )
                })}
              
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className='mt-10  2xl:flex-1 2xl:mt-0 2xl:ml-12'>
    <div className=' bg-blue-50 rounded-md w-1/2 h-64'>
       <h1 className='font-bold text-2xl p-4'> Resumen del Pedido</h1>
       <h2 className='text-xl my-4 p-4'>Total del Pedido: ${totalPrice}</h2>
       <Link href="/continuar"><span className='mx-2 p-2 bg-emerald-100 hover:cursor-pointer'>Continuar compra</span></Link>
    </div>
       
  </div>
</div>
    
  )
}
