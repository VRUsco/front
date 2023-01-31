import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Index from './pages/Index'
import Login from './pages/Login'
import VerUsuarios from './pages/VerUsuarios'
import Pruebas from './pages/Pruebas'

import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/ProtectedRoute'
import UnprotectedRoute from './components/UnprotectedRoute'

const router = createBrowserRouter([
	{
		path: '/',
		element: <ProtectedRoute><Index /></ProtectedRoute>,
		errorElement: <NotFound />,
	},
	{
		path: '/usuarios',
		element: <ProtectedRoute><VerUsuarios /></ProtectedRoute>
	},
	{
		path: '/pruebas',
		element: <ProtectedRoute><Pruebas /></ProtectedRoute>
	},
	{
		path: '/login',
		element: <UnprotectedRoute><Login /></UnprotectedRoute>,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
)
