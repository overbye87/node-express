import express from 'express'
import cors from 'cors'
import chalk from 'chalk'

import reqTime from './middlewares/reqTime.js'
import root from './routes/root.js'
import { config } from './config.js'

const PORT = process.env.PORT ?? config.port
const app = express()

app.use(cors())

app.use(express.json())

app.use(reqTime)

app.use(root)

app.listen(PORT, () => {
  console.log(chalk.blue(`Server has been started on port ${PORT}...`))
})