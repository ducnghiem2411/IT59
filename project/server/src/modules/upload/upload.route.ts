import { Router } from 'express'
import { uploadFile } from './upload.controller'

export const authRouter = Router()

authRouter.route('/upload').post(uploadFile)
