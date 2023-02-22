import { Router } from 'express'
import { accountRouter } from './account/account.route'
import { authRouter } from './auth/auth.route'

const indexRouter = Router()

indexRouter.use('/account', accountRouter)
indexRouter.use('/auth', authRouter)

export { indexRouter }
