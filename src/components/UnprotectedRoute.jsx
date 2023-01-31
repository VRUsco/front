import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
import Loading from './Loading'

const UnprotectedRoute = ({ children }) => {
	const { user, loading } = useAuth()
	if (loading) return <Loading />
	if (user) return <Navigate to='/' />
	return<>{children}</>
}

export default UnprotectedRoute
