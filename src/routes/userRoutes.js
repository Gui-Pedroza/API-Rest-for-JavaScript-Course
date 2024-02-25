import { Router } from 'express'
import * as userController from '../controllers/userController'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.post('/', userController.store)
router.get('/', loginRequired, userController.index)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.deleteUser)

export default router
