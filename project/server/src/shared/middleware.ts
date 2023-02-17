import { Response, NextFunction } from 'express'
import { JWT_SECRET } from './config'
import { verify } from 'jsonwebtoken'
import { AuthRequest } from './types/auth.request'

export async function userAuthorization(req: AuthRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (token) {
            verify(token, JWT_SECRET)
            req.accountId
            next()
        }
        throw { code: 401, message: "Unauthorized" }
    } catch (e) {
        throw { code: 401, message: "Unauthorized" }
    }    
}