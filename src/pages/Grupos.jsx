import { useRef, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/authContext'

const Grupos = () => {
	const { createGrupo, getGrupos, grupos } = useAuth()

	useEffect(() => {
		getGrupos()
	}, [grupos])

	const [alert, setAlert] = useState({
		titulo: '',
		cuerpo: '',
		color: '',
	})

	const inputNombre = useRef(null)
	const inputDescripcion = useRef(null)

	useEffect(() => {
		const t = setTimeout(
			() =>
				setAlert({
					titulo: '',
					cuerpo: '',
					color: '',
				}),
			10000
		)
		clearTimeout(t)
	}, [alert])

	const handleSubmit = async e => {
		e.preventDefault()

		const newGrupo = {
			nombre: inputNombre.current.value,
			descripcion: inputDescripcion.current.value,
		}

		const mssg = await createGrupo(newGrupo)
		setAlert({
			titulo: mssg,
			cuerpo: 'El grupo fue creado con éxito',
			color: 'green',
		})
		inputNombre.current.value = ''
		inputDescripcion.current.value = ''
	}

	/* if(loading) return <Loading /> */
	if (!grupos) return <div> No encuentro nada bro...</div>

	return (
		<>
			<Navbar />
			<div className='flex flex-col mx-auto mt-24 max-w-md lg:max-w-lg px-4 py-8 shadow bg-white rounded-lg shadow-smrk:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
				<div className='self-center mb-2 text-xl font-bold text-gray-800 sm:text-2xl dark:text-white'>
					Crear nuevo grupo
				</div>
				<div className='p-6 mt-2'>
					<form onSubmit={handleSubmit}>
						<div className='flex flex-wrap flex-col -mx-3'>
							<div className='w-full px-3 mb-6 md:mb-0'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									htmlFor='grid-first-name'
								>
									Nombres <span className='text-red-500'>*</span>
								</label>
								<input
									className='appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
									id='nombres'
									type='text'
									required
									ref={inputNombre}
									name='nombres'
								/>
							</div>
							<div className='w-full px-3 mb-6 md:mb-0'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Descripcion <span className='text-red-500'>*</span>
								</label>
								<textarea
									className='appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
									id='comment'
									ref={inputDescripcion}
									rows={5}
									cols={40}
								/>
							</div>
						</div>

						<div className='flex w-full mt-2'>
							<button
								type='submit'
								className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
							>
								Crear
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* LISTA DE GRUPOS */}
			<div className='container max-w-3xl px-4 mx-auto sm:px-8'>
				<div className='py-4'>
					<div className='px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8'>
						<div className='inline-block min-w-full overflow-hidden rounded-lg shadow'>
							<table className='min-w-full leading-normal text-center'>
								<thead>
									<tr>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Nombre
										</th>
										<th
											scope='col'
											className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'
										>
											Descripción
										</th>
									</tr>
								</thead>
								<tbody>
									{grupos?.map(({ id, nombre, descripcion }) => {
										return (
											<tr key={id}>
												<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
													<p className='text-gray-900 whitespace-no-wrap'>
														{nombre}
													</p>
												</td>
												<td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
													<p className='text-gray-900 whitespace-no-wrap'>
														{descripcion}
													</p>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Grupos
