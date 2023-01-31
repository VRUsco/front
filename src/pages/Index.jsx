import { useRef, useState, useEffect } from 'react'
import { useAuth } from '../context/authContext'
import Navbar from '../components/Navbar'
import md5 from 'md5'
import Alert from '../components/Alert'
export default function Index() {
	const [ alert, setAlert ] = useState({
		titulo: '',
		cuerpo: '',
		color:''
	})
	const { createUser } = useAuth()
	const form = useRef()
	const inputNombres = useRef(null)
	const inputApellidos = useRef(null)
	const inputContra = useRef(null)
	const inputReContra = useRef(null)
	const inputTipoId = useRef(null)
	const inputId = useRef(null)
	const inputRol = useRef(null)
	const inputSexoF = useRef(null)
	const inputFecha = useRef(null)

	useEffect(()=>{
		const t = setTimeout(()=> setAlert({
			titulo: '',
			cuerpo: '',
			color:''
		}), 10000)
		clearTimeout(t)
	}, [alert])


	const handleSubmit = async e => {
		e.preventDefault()

		const sexo = inputSexoF == 'on' ? 'F' : 'M'

		const saberRol = rol =>{
			if(rol == "Auxiliar") return 2
			if(rol == "Usuario") return 1
			if(rol == "Administrador") return 3
		}

		const newUser = {
			nombre: inputNombres.current.value,
			apellido: inputApellidos.current.value,
			password: inputContra.current.value,
			tipo_identificacion: 1, //inputTipoId.current.value,
			identificacion: inputId.current.value,
			rol: saberRol(inputRol.current.value),
			genero: sexo,
			fecha_nacimiento: inputFecha.current.value
		}
		console.log(newUser)
		console.log(inputReContra.current.value)
		console.log(inputReContra.current.value)

		if(inputContra.current.value != inputReContra.current.value) {
			setAlert({
				titulo: 'Contraseña',
				cuerpo: 'Las contraseñas no coinciden',
				color:'red'
			})
			return
		} 


		const mssg = await createUser(newUser)
		setAlert({
			titulo: mssg,
			cuerpo: 'El usuario fue creado con éxito',
			color:'green'
		})
		inputNombres.current.value = ''
		inputApellidos.current.value = ''
		inputContra.current.value = ''
		inputReContra.current.value = ''
		inputTipoId.current.value = ''
		inputId.current.value = ''
		inputRol.current.value = ''
		inputSexoF.current.value = ''
		inputFecha.current.value = ''
	}
	return (
		<>
			<Navbar />
			{ alert.titulo.length > 1 && <Alert titulo={alert.titulo} cuerpo={alert.cuerpo} color={alert.color}/>} 

			<div className='flex flex-col mx-auto my-20 max-w-md px-4 py-8 shadow bg-white rounded-lg shadow-smrk:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
				<div className='self-center mb-2 text-xl font-bold text-gray-800 sm:text-2xl dark:text-white'>
					Crear nuevo usuario
				</div>

				<div className='p-6 mt-2'>
					<form ref={form} onSubmit={handleSubmit}>
						<div className='flex flex-wrap -mx-3'>
							<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
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
									ref={inputNombres}
									name='nombres'
									placeholder='Jane'
								/>
							</div>
							<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Apellidos <span className='text-red-500'>*</span>
								</label>
								<input
									className='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='apellidos'
									required
									name='apellidos'
									ref={inputApellidos}
									type='text'
									placeholder='Doe'
								/>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3'>
							<div className='w-full px-3'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Contraseña <span className='text-red-500'>*</span>
								</label>
								<input
									className='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									type='password'
									required
									name='password'
									ref={inputContra}
									placeholder='******************'
								/>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3'>
							<div className='w-full px-3'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Repite la contraseña <span className='text-red-500'>*</span>
								</label>
								<input
									className='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									type='password'
									required
									ref={inputReContra}
									name='repitepassword'
									placeholder='******************'
								/>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3'>
							<div className='flex-none md:w-1/3 px-3 mb-6 md:mb-0'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Tipo <span className='text-red-500'>*</span>
								</label>
								<div className='relative w-full'>
									<select
										name='tipoid'
										required
										ref={inputTipoId}
										className='block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									>
										<option>C.C.</option>
										<option>T.I.</option>
										<option>C.E.</option>
										<option>NIUP</option>
									</select>
									<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
										<svg
											className='fill-current h-4 w-4'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
										</svg>
									</div>
								</div>
							</div>
							<div className='flex-1 px-3 mb-6 md:mb-0'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Número de documento <span className='text-red-500'>*</span>
								</label>
								<input
									className='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='userid'
									type='number'
									required
									name='userid'
									ref={inputId}
									placeholder={'20209898'}
								/>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3 mt-2'>
							<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Rol <span className='text-red-500'>*</span>
								</label>
								<div className='relative'>
									<select
										name='rol'
										required
										ref={inputRol}
										className='block appearance-none w-full text-sm bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									>
										<option>Usuario</option>
										<option>Auxiliar</option>
										<option>Administrador</option>
									</select>
									<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
										<svg
											className='fill-current h-4 w-4'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
										>
											<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
										</svg>
									</div>
								</div>
							</div>
							<div className='flex md:flex-col items-center gap-2 justify-center md:justify-end w-full md:w-1/3 px-3 mb-6 md:mb-0'>
								
								<label className='inline-flex items-center '>
									<input type='radio' name='sexo' className='w-4 h-4' />
									<span className='ml-2 text-gray-700'>Masculino</span>
								</label>
								<label className='inline-flex items-center'>
									<input
										type='radio'
										ref={inputSexoF}
										name='sexo'
										className='w-4 h-4'
									/>
									<span className='ml-2 text-gray-700'>Femenino</span>
								</label>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3 mt-3'>
							<div className='flex md:flex-col items-center gap-2 justify-center md:justify-end w-full px-3 mb-6 md:mb-0'>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
									Fecha de nacimiento <span className='text-red-500'>*</span>
								</label>
								<input type='date' required ref={inputFecha} className='appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
							</div>
						</div>
						<div className='flex w-full mt-10'>
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
		</>
	)
}
