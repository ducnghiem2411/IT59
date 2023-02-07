import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { PORT, DB_URI } from './shared/config'
import { connectMongo } from './mongodb'
import { indexRouter } from './modules/index.route'

(async () => {
  await connectMongo(DB_URI)
  const app = express()
  
  app.use(cors())
  app.use(indexRouter)
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  
  app.listen(PORT, () => {
      console.log(`App listen on port ${PORT}`)
  })
})()