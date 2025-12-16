import express from 'express'
import cors from 'cors'
import { bookRoutes } from './app/modules/books/book.routes'
import { userRouters } from './app/modules/auth/user.routes'
import errorHandler from './app/middlewares/errorHandler'

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/users', userRouters)

// error handler
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('<h1>Book Directory Server is running...</h1>')
})


export default app