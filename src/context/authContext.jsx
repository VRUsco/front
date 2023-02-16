import { useState, createContext, useContext } from 'react'

const authContext = createContext()

export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [users, setUsers] = useState()
	const [grupos, setGrupos] = useState()
	const [tipoid, setTipoid] = useState()
	const [pruebas, setPruebas] = useState()
	const [error, setError] = useState()
	const [modal, setModal] = useState()

	const urlServer = 'http://172.16.79.188:5000'
	/* TODO: manejar correctamente los errores */

	/* AQUÍ SE ENCUENTRAN TODAS LAS POSIBLES PETICIONES QUE SE PUEDEN HACER AL BACKEND A TRAVÉS DE FETCH. EL NOMBRE DESCRIBE LO QUE HACE CADA FUNCIÓN */

	const login = async (userId, userPassword) => {
		try {
			const userRaw = await fetch(`${urlServer}/validation`, {
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
					titulo: 'Error al iniciar sesión',
					cuerpo: userIncoming?.message,
					color: 'rojo',
				})
				return
			}

			/* POR SI EL USUARIO NO ES ADMIN/AUX */
			if (userIncoming.usuario.rol == 'usuario') {
				console.error('Error al iniciar sesión: ', userIncoming?.message)
				setError({
					titulo: 'Error al iniciar sesión',
					cuerpo: userIncoming?.message || 'Debes ser administrador/auxiliar.',
					color: 'rojo',
				})
				return
			}
			setUser(userIncoming.usuario)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}
	const getUsers = async () => {
		try {
			const usersRaw = await fetch(`${urlServer}/usuario`)
			const usersIncoming = await usersRaw.json()
			if (usersIncoming.status != 'OK') {
				console.error('Traer los usuarios', usersIncoming?.message)

				return
			}
			setUsers(usersIncoming.usuarios)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}
	const createUser = async userData => {
		try {
			const usersRaw = await fetch(`${urlServer}/usuario`, {
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
					titulo: 'Error al crear usuario:',
					cuerpo: userIncoming?.message,
					color: 'rojo',
				})

				return
			}
			console.log(response)
			return 'Creado exitosamente'
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}
	const getPruebas = async () => {
		try {
			const pruebasRaw = await fetch(`${urlServer}/pruebas`)
			const pruebasIncoming = await pruebasRaw.json()
			if (pruebasIncoming.status != 'OK') {
				console.error('Traer las pruebas: ', pruebasIncoming?.message)

				return
			}
			setPruebas(pruebasIncoming.pruebas)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}
	const getTipoId = async () => {
		try {
			const tiposRAW = await fetch(
				`${urlServer}/tipo_identificacion`
			)
			const tiposIncoming = await tiposRAW.json()
			if (tiposIncoming.status != 'OK') {
				console.error('Traer los tipos de id: ', tiposIncoming?.message)

				return
			}
			setTipoid(tiposIncoming.tipo)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}
	const getGrupos = async () => {
		try {
			const gruposRAW = await fetch(`${urlServer}/grupos`)
			const gruposIncoming = await gruposRAW.json()
			if (gruposIncoming.status != 'OK') {
				console.error('Traer los grupos: ', gruposIncoming?.message)

				return
			}
			setGrupos(gruposIncoming.grupos)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}
	const createGrupo = async groupData => {
		try {
			const gruposRAW = await fetch(`${urlServer}/grupos`, {
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

				return
			}
			if (grupos) getGrupos()
			setPruebas(gruposIncoming.grupos)
		} catch (e) {
			console.log('Entra al catch')
			console.error(e)
		}
	}
	const getErrores = async pruebaid => {
		try {
			const erroresRAW = await fetch(
				`${urlServer}/errores:${pruebaid}`
			)
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
			value={{
				login,
				user,
				setUser,
				users,
				getUsers,
				error,
				createUser,
				getPruebas,
				pruebas,
				tipoid,
				getTipoId,
				getGrupos,
				grupos,
				createGrupo,
				getErrores,
				modal,
				setModal,
			}} // AQUÍ SE EXPORTAN TODAS LAS FUNCIONES PARA QUE PUEDAN SER ACCEDIDAS DESDE CUALQUIER PUNTO DE LA APP
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
