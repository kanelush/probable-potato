import React from 'react'
import { useContext, useState, useEffect } from 'react'
import CartContext from '../context/CartContext'
import axios from 'axios'

const PurchaseForm = () => {
  const { items} = useContext(CartContext)

  const [mail, setMail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('')
  const [direccion, setDireccion] = useState('')
  const [info, setInfo] = useState('')
  const [data, setData] = useState()
  const [full, setFull] = useState(false)
  const [arr, setArr] = useState([])

  const [total, setTotal] = useState()
  let respo;
  let latest_added;

  const url = 'https://chillin.cl/api/cart'
  

//   useEffect(() => {

// 	const datos = {name, mail,last_name:lastName, telefono, direccion, info};
//     console.log(datos)

//     axios
//       .post('http://127.0.0.1:8000/api/purchasedata', datos)
//       .then((resp) => {
//       console.log(resp);      
//       })
//       .catch((err) => {
//       console.log(err);
// 	  return false
//       });
//       console.log("added!")
	 
//     //  setName('')
//     //  setMail('')
//     //  setInfo('')
//     //  setLastName('')
//     //  setTelefono('')
//     //  setDireccion('')
//   }, [full])
  useEffect(()=> {
	axios.get(url).then((resp) => {
		respo = resp.data
		setData(respo)
		console.log("puede ser--->",respo);
		console.log("puede florece el dinero--->",respo.length);
		
	}).catch((err) => {
		console.log("Err: ",err.response);
	  })
  }, [])
  if (data){
	// console.log("Data-->", data[0].url);
	latest_added = data[data.length-1]
	

	console.log("This is required value--->", latest_added);
  }
  console.log("email", mail);

  const handleSubmit = (e) => {
	// e.preventDefault()
    const datos = {name, mail,last_name:lastName, telefono, direccion, info};
    console.log(datos)

    axios
      .post('https://chillin.cl/api/purchasedata', datos)
      .then((resp) => {
      console.log(resp);
	  document.getElementById("yoyo").submit();
	  


      
      })
      .catch((err) => {
      console.log(err);
	  return false
      });
      console.log("added!")

	// console.log("yoyo",document.getElementById("yoyo"));
	

    //  setName('')
    //  setMail('')
    //  setInfo('')
    //  setLastName('')
    //  setTelefono('')
    //  setDireccion('')
}


  const totalPrice = items.reduce((total, item) =>{
    return total + item.price * item.quantity
  }, 0)


  return (
    <body className="">

		<div className="container lg:flex">
    
			<div className="justify-center px-6 my-12">
      

				<div className="w-full">

					

					<div className="w-full lg:w-full bg-slate-200 p-5 rounded-lg justify-center lg:flex-1">
          
						<h3 className="pt-4 text-2xl text-center">Datos de Envio</h3>
						{data && latest_added && <form id='yoyo' className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method='post' action={latest_added.url}>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										Email
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="email"
										placeholder="Email"
                    value={mail} onChange={(e) => setMail(e.target.value)}
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
										placeholder="Teléfono de contacto"
                    value={telefono} onChange={(e) => setTelefono(e.target.value)}
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

										placeholder="First Name"
                    type="name" value={name} onChange={(e) => setName(e.target.value)}
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
                    value={lastName} onChange={(e) => setLastName(e.target.value)}
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
									type="text"
									placeholder="Email"
                  value={direccion} onChange={(e) => setDireccion(e.target.value)}
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
									InFormación Adicional
								</label>
								<textarea
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="textarea"
									placeholder="Email"
                  value={info} onChange={(e) => setInfo(e.target.value)}
								/>
							</div>
							<div className="mb-6 text-center">
							<input type="hidden" name="token_ws"  value={latest_added.token} />
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"

									onClick={handleSubmit}

								>
									Finalizar Compra
								</button>
							</div>
							<hr className="mb-6 border-t" />

                                    
						</form>}
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

export default PurchaseForm;
