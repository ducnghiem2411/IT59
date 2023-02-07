import { Router } from 'express'
import { getAccount, getListAccount } from './account.controller'

export const accountRouter = Router()

accountRouter.route('/').get(getListAccount)
accountRouter.route('/:accountId').get(getAccount)
accountRouter.route('/:accountId').put()
