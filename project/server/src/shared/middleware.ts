import { Request, Response, NextFunction } from 'express'
import { JWT_SECRET } from './config'
import { verify } from 'jsonwebtoken'

export async function userAuthorization(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (token) {
            verify(token, JWT_SECRET)
            next()
            return
        }
        throw { code: 401, message: "Unauthorized" }
    } catch (e) {
        throw { code: 401, message: "Unauthorized" }
    }    
}