import { Router } from 'express'
import { accountRouter } from './account/account.route'
import { authRouter } from './auth/auth.route'
import { classroomRouter } from './classroom/classroom.route'
import { templateRouter } from './template/template.route'
import { uploadRouter } from './upload/upload.route'

const indexRouter = Router()

indexRouter.use('/account', accountRouter)
indexRouter.use('/auth', authRouter)
indexRouter.use('/upload', uploadRouter)
indexRouter.use('/template', templateRouter)
indexRouter.use('/classroom', classroomRouter)

export { indexRouter }
