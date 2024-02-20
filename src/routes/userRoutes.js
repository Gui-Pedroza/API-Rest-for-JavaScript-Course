import { Router } from 'express'
import * as userController from '../controllers/userController'

const router = new Router()

router.post('/', userController.store)
router.get('/list-all', userController.listAll)
router.get('/find-by-id/:id', userController.findOne)

export default router
