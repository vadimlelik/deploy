import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router.jsx'
import { AuthProvider } from './provider/auth.jsx'

createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
)
