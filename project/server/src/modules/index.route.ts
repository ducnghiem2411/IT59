import { Router } from "express"
import { accountRouter } from "./account/account.route"

const indexRouter = Router()

indexRouter.use('/account', accountRouter)

export { indexRouter }