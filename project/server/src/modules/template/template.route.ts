import { Router } from 'express'
import { approve, comment, getTemplateById, getTemplates, submitTemplate } from './template.controller'

export const templateRouter = Router()

templateRouter.route('/').post(submitTemplate)
templateRouter.route('/comment').post(comment)
templateRouter.route('/').get(getTemplates)
templateRouter.route('/:templateId').get(getTemplateById)
templateRouter.route('/approve/:templateId').post(approve)
