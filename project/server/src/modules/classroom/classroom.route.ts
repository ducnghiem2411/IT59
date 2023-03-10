import { Router } from 'express'
import { authMiddleware } from '../../shared/middleware'
import { createClass, editClass, getClassById, getClasses } from './classroom.controller'

export const classroomRouter = Router()
classroomRouter.route('/').post(authMiddleware, createClass)
classroomRouter.route('/').put(authMiddleware, editClass)
classroomRouter.route('/').get(getClasses)
classroomRouter.route('/:classroomId').get(getClassById)