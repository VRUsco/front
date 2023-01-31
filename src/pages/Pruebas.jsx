import { useState, useEffect, useLayoutEffect } from 'react'
import { isRouteErrorResponse, Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/authContext'

const VerUsuarios = () => {
	const { loading, getPruebas, pruebas } = useAuth()

	useEffect(() => {
		getPruebas()
	}, [])

	if(loading) return <Loading />
	if (!pruebas) return <div> No encuentro nada bro...</div>

	return (
		<>
			<Navbar />
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
										({ id, auxiliar, fecha_hora, paciente, nivel }) => {
											let fechaNuevaString = new Date(fecha_hora) //.getHours()
                                            fechaNuevaString = fechaNuevaString.toLocaleDateString()
											const horasFecha = new Date(fecha_hora).getMinutes() < 1 ? '00' :  new Date(fecha_hora).getMinutes()
											const fechaNuevaHoras = ` ${new Date(fecha_hora).getHours()}:${horasFecha}`
											const fechaCompleta = fechaNuevaString + fechaNuevaHoras
											return (
												<tr key={id}>
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
															{paciente}
														</p>
													</td>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
															<span
																aria-hidden='true'
																className='absolute inset-0 bg-green-200 rounded-full opacity-50'
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

export default VerUsuarios
