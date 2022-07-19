import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Link from 'next/link'
import { Table } from '../components/Table'



//Carro Page component> 
const Carro = () => {
  
  
  return (
    <>
    <div className="container bg-slate-200 py-20">
        <Table/>
       </div>
    </>

  )
}

export default Carro;