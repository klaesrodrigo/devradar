import express from 'express'
import routes from './routes'
import {config} from 'dotenv'
import mongoose from 'mongoose'
config()
const app = express()
const { PORT, DB_HOST, DB_PASS, DB_NAME } = process.env

mongoose.connect(`mongodb://${DB_HOST}:${DB_PASS}@cluster0-shard-00-00-1tch9.mongodb.net:27017,cluster0-shard-00-01-1tch9.mongodb.net:27017,cluster0-shard-00-02-1tch9.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use('/', routes)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))