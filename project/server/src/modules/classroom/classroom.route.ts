import { Router } from 'express'
import { getClassById, getClasses } from './classroom.controller'

export const classroomRouter = Router()
classroomRouter.route('/:classroomId').get(getClassById)
classroomRouter.route('/').get(getClasses)