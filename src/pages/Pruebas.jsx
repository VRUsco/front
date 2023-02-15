import { useState, useEffect } from 'react'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/authContext'

const Pruebas = () => {
	const { getPruebas, pruebas, getErrores, setModal } = useAuth()
	const [errorMssg, setErrorMssg] = useState(['No hay errores por mostrar.'])

	const showErrores = async id => {
		const mssg = await getErrores(id)
		mssg && setErrorMssg(mssg.Errores)
		setModal(true)
	}

	useEffect(() => {
		getPruebas()
	}, [])

	if (!pruebas) return <div> No encuentro nada bro...</div>

	return (
		<>
			<Navbar />
			<Modal estadoModal={errorMssg} />
			<div className='container mt-12 max-w-3xl px-4 mx-auto sm:px-8'>
				<div className='py-8'>
					<div className='px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8'>
						<div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
							<table className='min-w-full leading-normal'>
								<thead>
									<tr>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Fecha
										</th>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Auxiliar
										</th>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Usuario
										</th>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Nivel
										</th>
									</tr>
								</thead>
								<tbody>
									{pruebas.map(
										({ id, auxiliar, fecha_hora, usuario, nivel }) => {
											let fechaNuevaString = new Date(fecha_hora) //.getHours()
											fechaNuevaString = fechaNuevaString.toLocaleDateString()
											const horasFecha =
												new Date(fecha_hora).getMinutes() < 10
													? `0${new Date(fecha_hora).getMinutes()}`
													: new Date(fecha_hora).getMinutes()

											const fechaNuevaHoras = ` ${new Date(
												fecha_hora
											).getHours()}:${horasFecha}`

											const fechaCompleta = fechaNuevaString + fechaNuevaHoras

											const colorSpanName = () => {
												if (nivel == 'easy') return 'bg-green-200'
												if (nivel == 'medium') return 'bg-amber-200'
												if (nivel == 'hard') return 'bg-red-200'
											}

											return (
												<tr key={id} onClick={() => showErrores(id)}>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<div className='flex items-center'>
															<p className='text-gray-900 whitespace-no-wrap'>
																{fechaCompleta}
															</p>
														</div>
													</td>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<p className='text-gray-900 whitespace-no-wrap'>
															{auxiliar}
														</p>
													</td>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<p className='text-gray-900 whitespace-no-wrap'>
															{usuario}
														</p>
													</td>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<span className='relative inline-block px-3 py-1 font-semibold leading-tight'>
															<span
																aria-hidden='true'
																className={`absolute inset-0 ${colorSpanName()} rounded-full opacity-50`}
															/>
															<span className='relative'>
																{nivel[0].toUpperCase() + nivel.substring(1)}
															</span>
														</span>
													</td>
												</tr>
											)
										}
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Pruebas
