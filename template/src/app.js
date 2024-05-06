import express from 'express'
import routes from './routes/v1/index.js'
import httpStatus from 'http-status'

const app = express()

app.use(express.json())
app.use('/v1', routes)

app.use((req, res, next) => {
  res.sendStatus(httpStatus.NOT_FOUND)
})

export default app
