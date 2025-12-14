import express from 'express'
import cors from 'cors'

const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Book Directory Server is running...</h1>')
})


export default app