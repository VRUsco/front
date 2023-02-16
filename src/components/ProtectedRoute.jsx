import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
import Loading from './Loading'

const ProtectedRoute = ({ children }) => {
	const { user } = useAuth()
	// Obtenemos el estado del usuario definido en el contexto para saber si hay sesión o no

	if (!user) return <Navigate to='/login' /> // Si no hay sesión navegamos al login
	return<>{children}</> //Si hay sesión mostramos el componente enviado por props
}

export default ProtectedRoute
