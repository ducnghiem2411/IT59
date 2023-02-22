import { Request, Response } from 'express'
import { Account } from '../../models/Account'
import { ApiResponse } from '../../shared/types/api.response'
import { createAccount, login } from './auth.service'
import { SignIn, SignUpParams } from './auth.type'

export async function signUp(req: Request, res: Response): Promise<ApiResponse<Account>> {
  try {
    const body: SignUpParams = req.body

    console.log(body)
    const data = await createAccount(body)

    res.send({ code: 200, data })

    return { code: 200, data }
  } catch (e) {
    console.log(e)

    return { code: 500 }
  }
}

export async function signIn(req: Request, res: Response): Promise<ApiResponse<{ token: string }>> {
  try {
    const body: SignIn = req.body

    const token = await login(body)

    if (token) {
      return { code: 200, data: { token } }
    }

    return { code: 403, message: 'Invalid username or password' }
  } catch (e) {
    return { code: 500 }
  }
}
