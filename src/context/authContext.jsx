import { useState, createContext, useContext, useEffect } from 'react'

import md5 from 'md5'

const authContext = createContext()
///10987654
export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [users, setUsers] = useState()
	const [grupos, setGrupos] = useState()
	const [tipoid, setTipoid] = useState()
	const [pruebas, setPruebas] = useState()
/* 	const [loading, setLoading] = useState(false)
 */	const [error, setError] = useState()
 	const [modal, setModal] = useState()

	const login = async (userId, userPassword) => {
		/* setLoading(true) */
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

			/* POR SI EL BACKEND RESPONDE ALGO QUE NO SEA OK */
			if (userIncoming.status != 'OK') {
				console.error('Error al iniciar sesión: ', userIncoming?.message)
				setError({
					titulo: "Error al iniciar sesión",
					cuerpo: userIncoming?.message,
					color: "rojo",
				})
				return
			}

			/* POR SI EL USUARIO NO ES ADMIN/AUX */
			if (userIncoming.usuario.rol == 'usuario') {
				console.error('Error al iniciar sesión: ', userIncoming?.message)
				setError({
					titulo: "Error al iniciar sesión",
					cuerpo: userIncoming?.message || 'Debes ser administrador/auxiliar.',
					color: "rojo",
				})
				return
			}
			setUser(userIncoming.usuario)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
			console.log(user)
		}
		/* setLoading(false) */
	}
	const getUsers = async () => {
		/* setLoading(true) */
		try {
			const usersRaw = await fetch(`http://172.16.79.188:5000/usuario`)
			const usersIncoming = await usersRaw.json()
			if (usersIncoming.status != 'OK') {
				console.error('Traer los usuarios', usersIncoming?.message)
				/* setLoading(false) */
				return
			}
			setUsers(usersIncoming.usuarios)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		/* setLoading(false) */
	}
	const createUser = async userData => {
		/* setLoading(true) */
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
				/* setLoading(false) */
				return
			}
			console.log(response)
			return 'Creado exitosamente'
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		/* setLoading(false) */
	}
	const getPruebas = async () => {
		/* setLoading(true) */
		try {
			const pruebasRaw = await fetch(`http://172.16.79.188:5000/pruebas`)
			const pruebasIncoming = await pruebasRaw.json()
			if (pruebasIncoming.status != 'OK') {
				console.error('Traer las pruebas: ', pruebasIncoming?.message)
				/* setLoading(false) */
				return
			}
			setPruebas(pruebasIncoming.pruebas)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		/* setLoading(false) */
	}
	const getTipoId = async () => {
		/* setLoading(true) */
		try {
			const tiposRAW = await fetch(`http://172.16.79.188:5000/tipo_identificacion`)
			const tiposIncoming = await tiposRAW.json()
			if (tiposIncoming.status != 'OK') {
				console.error('Traer los tipos de id: ', tiposIncoming?.message)
				/* setLoading(false) */
				return
			}
			setTipoid(tiposIncoming.tipo)
			
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		/* setLoading(false) */
	}
	const deleteUser = async userToDelete => {
		/* setLoading(true) */
		try {
			const tiposRAW = await fetch(`http://172.16.79.188:5000/`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ usuario: user.id, borrando: userToDelete}),
			})
			const borrado = await tiposRAW.json()
			if (tiposIncoming.status != 'OK') {
				console.error('Error al borrar: ', tiposIncoming?.message)
				/* setLoading(false) */
				return
			}
			return 'Borrado exitosamente'
			
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		/* setLoading(false) */
	}
	const getGrupos = async () => {
		/* setLoading(true) */
		try {
			const gruposRAW = await fetch(`http://172.16.79.188:5000/grupos`)
			const gruposIncoming = await gruposRAW.json()
			if (gruposIncoming.status != 'OK') {
				console.error('Traer los grupos: ', gruposIncoming?.message)
				/* setLoading(false) */
				return
			}
			setGrupos(gruposIncoming.grupos)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		/* setLoading(false) */
	}
	const createGrupo = async groupData => {
		/* setLoading(true) */
		try {
			const gruposRAW = await fetch(`http://172.16.79.188:5000/grupos`,{
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(groupData),
			})
			const gruposIncoming = await gruposRAW.json()
			if (gruposIncoming.status != 'OK') {
				console.error('Traer los grupos: ', gruposIncoming?.message)
				/* setLoading(false) */
				return
			}
			if(grupos) getGrupos()
			setPruebas(gruposIncoming.grupos)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
		/* setLoading(false) */
	}
	const getErrores = async pruebaid =>{
		try {
			const erroresRAW = await fetch(`http://172.16.79.188:5000/errores:${pruebaid}`)
			const erroresIncoming = await erroresRAW.json()
			if (erroresIncoming.status != 'OK') {
				console.error('Traer los errores: ', erroresIncoming?.message)
				return
			}
			return erroresIncoming
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}

	return (
		<authContext.Provider
			value={{ login, user, setUser, users, getUsers, error, createUser, getPruebas, pruebas, tipoid, getTipoId, getGrupos, grupos, createGrupo, getErrores, modal, setModal }}
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
