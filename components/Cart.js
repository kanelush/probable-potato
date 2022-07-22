
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import Link from "next/link";


//Cart PopUp in Navbar
const Cart = () => {

  const { quanty, handleCartInc, handleCartDec, items, quantity, setQuantity, clicked } = useContext(CartContext)
  const [total, setTotal] = useState()
  const totalPrice = items.reduce((total, item) =>{
    return total + item.price * item.quantity
  }, 0)

  useEffect(() =>{
    console.log("this is use effect from quant--->", quantity)
    setQuantity(quantity)
  }, [items])
 
  
  return (
    <>
    <div className={`container  p-6`}>
      
        {items.map((item, index) => 
        
        (
          
          <div key={item.id} className="p-4 border">
            <img height="60" width="100%" alt="ecommerce" className="hover:scale-105 transition-all rounded border border-gray-200" src={`https://chillin.cl${item.image}`} />
            <h2 className="">{item.name}- {item.quantity}- ${item.price * item.quantity} </h2>
            <button className={`px-4 mx-1 bg-emerald-100 rounded-lg`} onClick={() => handleCartInc(item, quantity)}>+</button>
            <button className='px-4 bg-red-100 rounded-lg' onClick={() => handleCartDec(item, quantity)}>-</button>
          </div>
    ))}
      <Link href="/carro">
      <a className={`m-4 p-2 bg-emerald-200 rounded-lg`} >Ir al carro</a>
      </Link>
       </div>
    </>
  );
};

export default Cart;