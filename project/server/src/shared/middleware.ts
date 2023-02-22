import { Response, NextFunction, Request } from 'express'
import { JWT_SECRET } from './config'
import { verify } from 'jsonwebtoken'

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (token) {
      const decodeResult = verify(token, JWT_SECRET)
      req['user'] = decodeResult
      next()
    }
    throw { code: 401, message: 'Unauthorized' }
  } catch (e) {
    throw { code: 401, message: 'Unauthorized' }
  }
}
