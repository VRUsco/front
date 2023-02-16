import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
import Loading from './Loading'

const UnprotectedRoute = ({ children }) => {
	const { user } = useAuth()

	if (user) return <Navigate to='/' />  // Si hay sesión navegamos al home
	return<>{children}</> // Si no hay sesión mostramos el componente enviado por props (usualmente el login)
}

export default UnprotectedRoute
