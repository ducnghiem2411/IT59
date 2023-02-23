import { Accounts } from '../../mongodb'
import { SignIn, SignUpParams } from './auth.type'
import * as uuid from 'uuid'
import { Account } from '../../models/Account'
import { createToken } from '../../shared/jwt'

export async function createAccount(params: SignUpParams) {
  const { accountName, accountType, classroomId, email, fullName, phone, password } = params

  const account: Account = {
    accountId: uuid.v4(),
    accountName,
    accountType,
    classroomId,
    email,
    fullName,
    password,
    phone,
    createdAt: new Date().getTime(),
    image: '',
    isApproved: false,
  }

  await Accounts.insertOne(account)

  return account
}

export async function login({ accountName, password }: SignIn): Promise<string | undefined> {
  const account = await Accounts.findOne({ accountName, password })
  if (account) {
    return createToken({
      accountId: account.accountId,
      accountName: account.accountName,
      accountType: account.accountType,
    })
  }
}
