import { useState } from "react"
import { Users } from "./Users"

export const UserCards = () => {
	const [showUsers, setShowUsers] = useState(true)
	return (
		<>
			<button className='btn-show' onClick={() => setShowUsers(!showUsers)}>
				{showUsers ? 'Not show users' : 'Show users'}
			</button>
			{showUsers && <Users />}
		</>
	)
}
