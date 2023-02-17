import { Request } from 'express'

export interface AuthRequest extends Request {
    accountId: string
    accountName: string
    accountType: 'admin' | 'teacher' | 'student'
}