import { Router } from 'express'
import { getFile, uploadFile } from './upload.controller'
import { uploadMiddleware } from './upload.service'

export const uploadRouter = Router()

uploadRouter.route('/send').post(uploadMiddleware.single('file'), uploadFile)
uploadRouter.route('/read/:filename').get(getFile)
