import { useState, useEffect, useLayoutEffect } from 'react'
import { isRouteErrorResponse, Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/authContext'

const VerUsuarios = () => {
	const { loading, getUsers, users } = useAuth()
	const [usersConFecha, setUsersConFecha] = useState()

	useEffect(() => {
		getUsers()
	}, [])

	if(loading) return <Loading />
	if (!users) return <div> No encuentro nada bro...</div>

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
											Nombre
										</th>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Apellido
										</th>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Fecha de nacimiento
										</th>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Rol
										</th>
									</tr>
								</thead>
								<tbody>
									{users.map(
										({ apellido, fecha_nacimiento, nombre, id, rol }) => {
											let fechaNueva = new Date(fecha_nacimiento)
											fechaNueva = fechaNueva.toLocaleDateString()
											return (
												<tr key={id}>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<div className='flex items-center'>
															<p className='text-gray-900 whitespace-no-wrap'>
																{nombre}
															</p>
														</div>
													</td>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<p className='text-gray-900 whitespace-no-wrap'>
															{apellido}
														</p>
													</td>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<p className='text-gray-900 whitespace-no-wrap'>
															{fechaNueva}
														</p>
													</td>
													<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
														<span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900'>
															<span
																aria-hidden='true'
																className='absolute inset-0 bg-green-200 rounded-full opacity-50'
															/>
															<span className='relative'>
																{rol[0].toUpperCase() + rol.substring(1)}
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
