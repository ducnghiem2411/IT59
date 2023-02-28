import { Router } from 'express'
import { authMiddleware } from '../../shared/middleware'
import { signIn, signUp } from './auth.controller'

export const authRouter = Router()

authRouter.route('/sign-in').post(signIn)
authRouter.route('/sign-up').post(authMiddleware, signUp)
