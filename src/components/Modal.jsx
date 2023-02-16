import { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext'

export default function Modal({ estadoModal }) {
	const { modal, setModal } = useAuth()
	// Obtenemos el estado definido en el contexto y su SET para cambiar el estado cuando cerremos el modal

	const [showModal, setShowModal] = useState(true)
	// Creamos un estado local para manejar el estado del modal

	useEffect(() => {
		setShowModal(!showModal)
	}, [modal])
	// Cada vez que el estado 'modal' cambie, el efecto cambia y ejecuta la función que invierte el estado local del estado.

	return (
		<div className=''>
			{showModal ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-'>
									<button
										className='p-1 ml-auto bg-transparent border-0 text-black text-3xl font-semibold outline-none focus:outline-none'
										onClick={() => setModal(false)}
									>
										<span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none mr-4 mt-2'>
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative p-6 flex-auto'>
									<ul>
										{estadoModal?.map(({ fecha_hora, tipo_error }, i) => {
											let fechaNuevaString = new Date(fecha_hora)
											fechaNuevaString = fechaNuevaString.toLocaleDateString()
											const horasFecha =
												new Date(fecha_hora).getMinutes() < 10
													? `0${new Date(fecha_hora).getMinutes()}`
													: new Date(fecha_hora).getMinutes()

											const segundosFecha =
												new Date(fecha_hora).getSeconds() < 10
													? `0${new Date(fecha_hora).getSeconds()}`
													: new Date(fecha_hora).getSeconds()

											const fechaNuevaHoras = ` ${new Date(
												fecha_hora
											).getHours()}:${horasFecha}:`

											const fechaCompleta = fechaNuevaString + fechaNuevaHoras + segundosFecha
 
											return (
												<li key={i} className='mb-4 pl-2 border border-b-0 border-l-2 border-l-red-400 border-t-0 border-r-0'>
													<p className=''>{fechaCompleta}</p>
													<p>{tipo_error}</p>
												</li>
											)
										})}
										{estadoModal ? null : (
											<li className='italic text-gray-700'>
												No hay errores para mostrar
											</li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</div>
	)
}
