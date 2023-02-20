import { Router } from 'express'
import { authMiddleware } from '../../shared/middleware'
import { editAccount, getAccountById, getListAccount } from './account.controller'

export const accountRouter = Router()

accountRouter.route('/').get(getListAccount)
accountRouter.route('/:accountId').get(authMiddleware, getAccountById)
accountRouter.route('/:accountId').put(authMiddleware, editAccount)
