require('dotenv').config()
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/errorMiddleware')
// const fileMiddleware = require('./middlewares/fileMiddlewares/uploadImages')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
	credentials: true,
	origin: process.env.CLIENT_URL
}))
app.use('/images', express.static(path.join(__dirname, 'images'))) 

app.use('/api/auth/', require('./routes/auth.routes'))
app.use('/api/support/', require('./routes/support.routes'))
app.use('/api/projects/', require('./routes/projects.routes'))
app.use('/api/pages/', require('./routes/page.routes'))
app.use('/api/user/', require('./routes/user.routes'))
app.use(errorMiddleware)

// const PORT = config.get('port') || 5000
const PORT = process.env.PORT

async function start() {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		app.listen(PORT, () => {
			console.log(`App has been started on port ${PORT}...`)
		})
	} catch (e) {
		console.log('Server Error', e.message)
		process.exit(1)
	}
}

start()

