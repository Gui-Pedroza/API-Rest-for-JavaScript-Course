import { Router } from 'express'
import * as homeController from '../controllers/homeController'

const router = new Router()

router.get('/', homeController.index)

export default router
