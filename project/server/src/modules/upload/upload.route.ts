import { Router } from 'express'
import { getFile, uploadFile } from './upload.controller'

export const uploadRouter = Router()

uploadRouter.route('/send').post(uploadFile)
uploadRouter.route('/read/:filename').get(getFile)
