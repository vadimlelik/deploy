import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { postRouter } from './route/post.router.js'
import { authRouter } from './route/auth.router.js'
import path from 'path'
const __dirname = path.resolve()
dotenv.config()
const app = express()

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
)
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/posts', postRouter)
app.use('/api/v1/auth', authRouter)

app.use(express.static(path.join(__dirname, 'dist')))

// «Ловим» все маршруты React SPA
app.get('*', (req, res) => {
	if (req.path.startsWith('/api/')) {
		return res.status(404).json({ message: 'API route not found' })
	}
	res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const start = async () => {
	await mongoose.connect(process.env.MONGO_URI)
	app.listen(process.env.PORT, () => {
		console.log('listening on port', process.env.PORT)
	})
	try {
	} catch (error) {
		console.log(error)
	}
}

start()
