import { useAuth } from '../provider/auth'

export const Main = () => {
	const { isLoading, user } = useAuth()
	return <div>{<h1>user</h1>}</div>
}
