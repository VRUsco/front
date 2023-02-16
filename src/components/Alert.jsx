import React from 'react'

const Alert = ({ titulo = "Error al probar", cuerpo = "Bro, algo pasó no sé qué pero algo pasó", color = 'red'}) => {

	return (
		<div
			className={`absolute left-0 top-24 w-auto transition duration-200 bg-${color}-200 text-${color}-600 p-4`}
			role='alert'
		>
			<p className='font-bold'>{titulo}</p>
			<p>{cuerpo}</p>
		</div>
	)
}

export default Alert
