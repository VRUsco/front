import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import Alert from '../components/Alert'
import md5 from 'md5'

const Login = () => {
	const inputId = useRef()
	const inputPassword = useRef()
	const navigate = useNavigate()

	const { login, user, error } = useAuth()

	const handleSubmit = e => {
		e.preventDefault()
		login(inputId.current.value, inputPassword.current.value)
		if (user) {
			navigate('/')
		}
	}

	return (
		<>
			{error && <Alert titulo={error.titulo} cuerpo={error.cuerpo} />}
			<h1 className='text-center my-8 font-semibold text-xl'>ORIESPACIAL</h1>
			<div className='flex flex-col mx-auto mt-14 w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
				<div className='self-center mb-3 text-4xl font-bold text-gray-800 dark:text-white'>
					Iniciar sesión
				</div>
				<div className='mt-8'>
					<form autoComplete='off'>
						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-[16px]'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
										/>
									</svg>
								</span>
								<input
									ref={inputId}
									type='text'
									id='id'
									className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Tu id'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-6'>
							<div className='flex relative '>
								<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
									<svg
										width={15}
										height={15}
										fill='currentColor'
										viewBox='0 0 1792 1792'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z' />
									</svg>
								</span>
								<input
									ref={inputPassword}
									type='password'
									id='password'
									className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Tu contraseña'
								/>
							</div>
						</div>
						<div className='flex w-full'>
							<button
								type='submit'
								onClick={handleSubmit}
								className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
							>
								Ingresar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
