export const User = ({ id, name, username, email }) => {
	return (
		<div key={id} className='card__item'>
			<p>Name - {name}</p>
			<p>Lastname - {username}</p>
			<p>Email - {email}</p>
		</div>
	)
}
