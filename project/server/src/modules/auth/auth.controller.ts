import { Request, Response } from 'express'
import { Account } from '../../models/Account'
import { ApiResponse } from '../../shared/types/api.response'
import { TokenPayload } from '../../shared/types/token.payload'
import { createAccount, login } from './auth.service'
import { SignIn, SignUpParams } from './auth.type'

export async function signUp(req: Request, res: Response<ApiResponse<Account>>) {
  try {
    const body: SignUpParams = req.body
    const creator: TokenPayload = req['user']

    const data = await createAccount(creator, body)
    res.send({ code: 200, data })
  } catch (e) {
    res.send({ code: 500 })
  }
}

export async function signIn(req: Request, res: Response<ApiResponse<{ token: string }>>) {
  try {
    const body: SignIn = req.body
    const token = await login(body)
    if (token) {
      res.send({ code: 200, data: { token } })
    }
    res.send({ code: 403, message: 'Invalid username or password' })
  } catch (e) {
    res.send({ code: 500 })
  }
}
