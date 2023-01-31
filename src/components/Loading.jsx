import React from 'react'

const Loading = () => {
	return (
		<div>
			<div className='flex space-x-2'>
				<div aria-label='Loading...' role='status'>
					<svg
						className='h-6 w-6 animate-spin stroke-gray-500'
						viewBox='0 0 256 256'
					>
						<line
							x1={128}
							y1={32}
							x2={128}
							y2={64}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='60.1'
							x2='173.3'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={224}
							y1={128}
							x2={192}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='195.9'
							x2='173.3'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={128}
							y1={224}
							x2={128}
							y2={192}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='195.9'
							x2='82.7'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={32}
							y1={128}
							x2={64}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='60.1'
							x2='82.7'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
					</svg>
				</div>
				<div aria-label='Loading...' role='status'>
					<svg className='h-6 w-6 animate-spin' viewBox='3 3 18 18'>
						<path
							className='fill-gray-200'
							d='M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z'
						/>
						<path
							className='fill-gray-800'
							d='M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z'
						/>
					</svg>
				</div>
			</div>
			<div className='flex space-x-2'>
				<div aria-label='Loading...' role='status'>
					<svg
						className='h-6 w-6 animate-spin stroke-red-500'
						viewBox='0 0 256 256'
					>
						<line
							x1={128}
							y1={32}
							x2={128}
							y2={64}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='60.1'
							x2='173.3'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={224}
							y1={128}
							x2={192}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='195.9'
							x2='173.3'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={128}
							y1={224}
							x2={128}
							y2={192}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='195.9'
							x2='82.7'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={32}
							y1={128}
							x2={64}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='60.1'
							x2='82.7'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
					</svg>
				</div>
				<div aria-label='Loading...' role='status'>
					<svg className='h-6 w-6 animate-spin' viewBox='3 3 18 18'>
						<path
							className='fill-red-200'
							d='M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z'
						/>
						<path
							className='fill-red-800'
							d='M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z'
						/>
					</svg>
				</div>
			</div>
			<div className='flex space-x-2'>
				<div aria-label='Loading...' role='status'>
					<svg
						className='h-6 w-6 animate-spin stroke-amber-500'
						viewBox='0 0 256 256'
					>
						<line
							x1={128}
							y1={32}
							x2={128}
							y2={64}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='60.1'
							x2='173.3'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={224}
							y1={128}
							x2={192}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='195.9'
							x2='173.3'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={128}
							y1={224}
							x2={128}
							y2={192}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='195.9'
							x2='82.7'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={32}
							y1={128}
							x2={64}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='60.1'
							x2='82.7'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
					</svg>
				</div>
				<div aria-label='Loading...' role='status'>
					<svg className='h-6 w-6 animate-spin' viewBox='3 3 18 18'>
						<path
							className='fill-amber-200'
							d='M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z'
						/>
						<path
							className='fill-amber-800'
							d='M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z'
						/>
					</svg>
				</div>
			</div>
			<div className='flex space-x-2'>
				<div aria-label='Loading...' role='status'>
					<svg
						className='h-6 w-6 animate-spin stroke-indigo-500'
						viewBox='0 0 256 256'
					>
						<line
							x1={128}
							y1={32}
							x2={128}
							y2={64}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='60.1'
							x2='173.3'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={224}
							y1={128}
							x2={192}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='195.9'
							y1='195.9'
							x2='173.3'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={128}
							y1={224}
							x2={128}
							y2={192}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='195.9'
							x2='82.7'
							y2='173.3'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1={32}
							y1={128}
							x2={64}
							y2={128}
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
						<line
							x1='60.1'
							y1='60.1'
							x2='82.7'
							y2='82.7'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={24}
						/>
					</svg>
				</div>
				<div aria-label='Loading...' role='status'>
					<svg className='h-6 w-6 animate-spin' viewBox='3 3 18 18'>
						<path
							className='fill-indigo-200'
							d='M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z'
						/>
						<path
							className='fill-indigo-800'
							d='M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Loading
