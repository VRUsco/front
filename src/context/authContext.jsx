import { useState, createContext, useContext, useEffect } from 'react'

import md5 from 'md5'

const authContext = createContext()
///10987654
export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [users, setUsers] = useState()
	const [pruebas, setPruebas] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	const login = async (userId, userPassword) => {
		setLoading(true)
		try {
			const userRaw = await fetch(`http://172.16.79.188:5000/validation`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userId, userPassword }),
			})
			const userIncoming = await userRaw.json()
			if (userIncoming.status != 'OK') {
				console.error('Error al iniciar sesión: ', userIncoming?.message)
				setError({
					titulo: "Error al iniciar sesión",
					cuerpo: userIncoming?.message,
					color: "rojo",
				})
				setLoading(false)
				return
			}
			setUser(userIncoming.usuario)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
			console.log(user)
		}
		setLoading(false)
	}

	const getUsers = async () => {
		setLoading(true)
		try {
			const usersRaw = await fetch(`http://172.16.79.188:5000/usuario_list`)
			const usersIncoming = await usersRaw.json()
			if (usersIncoming.status != 'OK') {
				console.error('Traer los usuarios', usersIncoming?.message)
				setLoading(false)
				return
			}
			setUsers(usersIncoming.usuarios)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		setLoading(false)
	}

	const createUser = async userData => {
		setLoading(true)
		try {
			const usersRaw = await fetch(`http://172.16.79.188:5000/usuario`,{
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			})
			const response = await usersRaw.json()
			if (response.status != 'OK') {
				console.error('Error al crear usuario: ', userIncoming?.message)
				setError({
					titulo: "Error al crear usuario:",
					cuerpo: userIncoming?.message,
					color: "rojo",
				})
				setLoading(false)
				return
			}
			console.log(response)
			return 'Creado exitosamente'
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		setLoading(false)
	}

	const getPruebas = async () => {
		setLoading(true)
		try {
			const pruebasRaw = await fetch(`http://172.16.79.188:5000/pruebas`)
			const pruebasIncoming = await pruebasRaw.json()
			if (pruebasIncoming.status != 'OK') {
				console.error('Traer las pruebas: ', pruebasIncoming?.message)
				setLoading(false)
				return
			}
			setPruebas(pruebasIncoming.pruebas)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		setLoading(false)
	}
	

	return (
		<authContext.Provider
			value={{ login, user, setUser, loading, users, getUsers, error, createUser, getPruebas, pruebas }}
		>
			{children}
		</authContext.Provider>
	)
}
export const useAuth = () => {
	const context = useContext(authContext)
	if (!context) throw new Error('No hay un auth provider.')
	return context
}
