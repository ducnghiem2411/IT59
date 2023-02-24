import { Router } from 'express'
import { accountRouter } from './account/account.route'
import { authRouter } from './auth/auth.route'
import { uploadRouter } from './upload/upload.route'

const indexRouter = Router()

indexRouter.use('/account', accountRouter)
indexRouter.use('/auth', authRouter)
indexRouter.use('/upload', uploadRouter)

export { indexRouter }
