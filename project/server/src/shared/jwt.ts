import { verify, sign } from 'jsonwebtoken'
import { JWT_SECRET } from './config'
import { TokenPayload } from './types/token.payload'

export function createToken(payload: TokenPayload): string {
  return sign(payload, JWT_SECRET, { expiresIn: '1y' })
}

export async function verifyToken(token: string) {
  try {
    return verify(token, JWT_SECRET)
  } catch (e) {
    throw e
  }
}
