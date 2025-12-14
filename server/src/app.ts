import express from 'express'
import cors from 'cors'
import { bookRoutes } from './app/modules/books/book.routes'

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/books', bookRoutes)



app.get('/', (req, res) => {
    res.send('<h1>Book Directory Server is running...</h1>')
})


export default app