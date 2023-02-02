import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { PORT } from './shared/config'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`)
})