import { useEffect, useState } from 'react'
import { User } from './User'

export const Users = () => {
	const [usersData, setUsersData] = useState([])
	const [errorMessage, setErrorMessage] = useState('')

	const getUsersData = async () => {
		try {
			const responce = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await responce.json()
			if (!responce.ok) {
				throw new Error('Incorrectly set api for fetch')
			}
			setUsersData(data)
		} catch (e) {
			setErrorMessage(e.message)
		}
	}

	useEffect(() => {
		getUsersData()

		const getUserClicked = () => {
			console.log('click')
		}

		window.addEventListener('click', getUserClicked)
		return () => {
			window.removeEventListener('click', getUserClicked)
		}
	}, [])

	return (
		<div className='card'>
			{errorMessage && <p>{errorMessage}</p>}
			{usersData.length > 0 &&
				!errorMessage &&
				usersData
					.slice(0, 9)
					.map(user => (
						<User
							key={user.id}
							id={user.id}
							name={user.name}
							username={user.username}
							email={user.email}
						/>
					))}
		</div>
	)
}
