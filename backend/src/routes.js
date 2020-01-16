import { Router } from 'express'
import DevsController from './controllers/dev'
const routes = Router()

routes.get('/status', (_, res) => {
    res.json({status: 'online!'})
})

routes.post('/devs', new DevsController().create)

export default routes