import React from 'react'
import { useContext, useState, useEffect } from 'react'
import CartContext from '../context/CartContext'

const PurchasehtmlForm = () => {
  const { items} = useContext(CartContext)

  const totalPrice = items.reduce((total, item) =>{
    return total + item.price * item.quantity
  }, 0)
  return (
    <body className="lg:ml-20">

		<div className="container lg:flex">
    
			<div className="justify-center px-6 my-12">
      

				<div className="w-full">

					

					<div className="w-full lg:w-full bg-slate-200 p-5 rounded-lg justify-center lg:flex-1">
          
						<h3 className="pt-4 text-2xl text-center">Datos de Envio</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										Email
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Telefono
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
              <div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										Nombre
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Apellido
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Dirección
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Ciudad
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="text"
										placeholder='Ingresa tu Ciudad'
									/>
									
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
										Región
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="text"
										placeholder='Ingresa tu Región'
									/>
								</div>
							</div>
              <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									InhtmlFormación Adicional
								</label>
								<textarea
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="textarea"
									placeholder="Email"
								/>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Finalizar Compra
								</button>
							</div>
							<hr className="mb-6 border-t" />
							
						</form>
					</div>
				</div>
			</div>
      <div className='my-12 bg-blue-50 rounded-md w-full h-64 lg:flex-1'>
            <h1 className='font-bold text-2xl p-4'> Resumen del Pedido</h1>
            <h2 className='text-xl my-4 p-4'>Total del Pedido: ${totalPrice}</h2>
        </div>
		</div>
	</body>
  )
}

export default PurchasehtmlForm;