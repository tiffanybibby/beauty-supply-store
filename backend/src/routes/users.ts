import { Router } from 'express'
import * as controllers from '../controllers/users'
import restrict from '../helpers/restrict'

const router = Router()

router.get('/users', controllers.getUsers)
router.get('/user/:id', controllers.getUser)
router.post('/users', restrict, controllers.createUser)
router.put('/user/:id', restrict, controllers.updateUser)
router.delete('/user/:id', restrict, controllers.deleteUser)

export default router
