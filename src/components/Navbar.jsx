import { useState, useRef } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()
    const [ navbarStatus, setNavbarStatus ] = useState(false)

    const clickMenu = () =>{
        setNavbarStatus(!navbarStatus)
    }
    const handleLogout = () =>{
        setUser(undefined)
        navigate('/login')
    }
	
	return (
		<nav className='fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-white px-6 py-4 shadow z-10'>
			<div className='flex items-center flex-shrink-0 mr-6'>
				<span className='font-semibold text-xl tracking-tight'>
					Hola, {user.nombre}
				</span>
			</div>
			<div className='block lg:hidden'>
				<button onClick={clickMenu} className='flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800'>
					<svg
						className='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div className={`w-full ${navbarStatus ? 'fixed' : 'hidden'} top-16 bg-white right-0 left-0 flex-grow lg:flex lg:items-center lg:w-auto z-10`}>
				<div className='text-sm lg:flex-grow mx-6'>
                    <Link to="/" className='block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4'>Crear nuevo usuario</Link>
                    <Link to="/usuarios" className='block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4'>Usuarios</Link>
                    <Link to="/pruebas" className='block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4'>Pruebas</Link>
				</div>
				<div className='mx-6 mb-3 lg:mb-0'>
					<button
						onClick={handleLogout}
						className='inline-block text-sm px-4 py-2 leading-none border rounded  border-gray-800 hover:border-gray-600 hover:text-gray-600 mt-4 lg:mt-0'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 576 512'
							className='w-5 fill-gray-700'
						>
							<path d='M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z' />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
