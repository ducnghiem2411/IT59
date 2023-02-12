import { Router } from 'express'
import { editAccount, getAccountById, getListAccount } from './account.controller'

export const accountRouter = Router()

accountRouter.route('/').get(getListAccount)
accountRouter.route('/:accountId').get(getAccountById)
accountRouter.route('/:accountId').put(editAccount)
