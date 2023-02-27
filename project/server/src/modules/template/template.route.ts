import { Router } from 'express'
import { getTemplateById, getTemplates, submitTemplate } from './template.controller'

export const templateRouter = Router()

templateRouter.route('/').post(submitTemplate)
templateRouter.route('/').get(getTemplates)
templateRouter.route('/:templateId').get(getTemplateById)
