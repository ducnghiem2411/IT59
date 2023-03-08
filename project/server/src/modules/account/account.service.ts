import { Filter } from 'mongodb'
import { Account } from '../../models/Account'
import { Accounts } from '../../mongodb'
import { PaginateResponse } from '../../shared/types/api.response'
import { validatePaginationParams } from '../../shared/utils'
import { EditAccountParams, ListAccountParams } from './account.type'

export async function findAccountById(accountId: string): Promise<Account | null> {
  return await Accounts.findOne({ accountId })
}

export async function listAccount(params: ListAccountParams): Promise<PaginateResponse<Account>> {
  const { page, pageSize, accountType, classroomId, isApproved } = params
  validatePaginationParams(page, pageSize)

  let filter: Filter<Account> = {}

  if (accountType) {
    filter.accountType = accountType
  }
  if (classroomId) {
    filter.classroomId = classroomId
  }
  if (isApproved !== undefined) {
    filter.isApproved = isApproved
  }

  const data = await Accounts.find(filter)
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray()
  const total = await Accounts.countDocuments(filter)
  const totalPage = Math.ceil(pageSize/total)
  return { total, data, page, totalPage }
}

export async function editAccountById(accountId: string, params: EditAccountParams) {
  const { value } = await Accounts.findOneAndUpdate(
    { accountId },
    { $set: params },
    { returnDocument: 'after' }
  )
  return value
}