import { Accounts } from '../../mongodb'
import { SignIn, SignUpParams } from './auth.type'
import * as uuid from 'uuid'
import { Account } from '../../models/Account'
import { createToken } from '../../shared/jwt'
import { TokenPayload } from '../../shared/types/token.payload'
import { ClientSession } from 'mongodb'

export async function createAccount(creator: TokenPayload, params: SignUpParams) {
  const { accountName, accountType, classroomId, email, fullName, phone, password } = params

  if ((accountType === 'admin' || accountType === 'teacher') && creator.accountType !== 'admin') {
    return
  }

  if (accountType === 'student' && creator.accountType !== 'student') {
    return
  }

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
    creatorId: creator.accountId
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
      classroomId: account.classroomId,
      email: account.email,
      fullName: account.fullName,
      image: account.image,
      phone: account.phone
    })
  }
}
