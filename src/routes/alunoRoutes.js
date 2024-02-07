import { Router } from 'express'
import * as alunoController from '../controllers/alunoController'

const router = new Router()

router.get('/aluno', alunoController.index)

export default router
