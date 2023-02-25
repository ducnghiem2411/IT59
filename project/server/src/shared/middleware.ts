import { Response, NextFunction, Request } from 'express'
import { JWT_SECRET } from './config'
import { verify } from 'jsonwebtoken'
import { ApiResponse } from './types/api.response'

export async function authMiddleware(req: Request, res: Response<ApiResponse<any>>, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (token) {
      const decodeResult = verify(token, JWT_SECRET)
      req['user'] = decodeResult
      next()
    }
    res.send({ code: 401, message: 'Unauthorized' })
  } catch (e) {
    res.send({ code: 401, message: 'Unauthorized' })
  }
}
