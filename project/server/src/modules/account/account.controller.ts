import { Request, Response } from 'express'
import { Account } from '../../models/Account'
import { ApiResponse, PaginateResponse } from '../../shared/types/api.response'
import { TokenPayload } from '../../shared/types/token.payload'
import { editAccountById, findAccountById, listAccount } from './account.service'
import { EditAccountParams, ListAccountParams } from './account.type'

export async function getListAccount(req: Request, res: Response<ApiResponse<PaginateResponse<Account>>>) {
  try {
    const { page, pageSize, accountType, classroomId, isApproved }: ListAccountParams = req.query as any
    const data = await listAccount({
      page: Number(page),
      pageSize: Number(pageSize),
      accountType,
      classroomId,
      isApproved: isApproved && Boolean(isApproved),
    })
    res.send({ code: 200, data })
  } catch (e) {
    res.send({ code: 500 })
  }
}

export async function getAccountById(req: Request, res: Response<ApiResponse<Account>>) {
  try {
    const { accountId } = req.params
    const account = await findAccountById(accountId)
    if (account) {
        res.send({ code: 200, data: account })
    }
    res.send({ code: 404 })
  } catch (e) {
    res.send({ code: 500 })
  }
}

export async function editAccount(req: Request, res: Response<ApiResponse<Account>>) {
  try {
    const body: EditAccountParams = req.body
    const user: TokenPayload = req['user']

    const editedAccount = await editAccountById(user.accountId, body)
    if (editedAccount) {
        res.send({ code: 200, data: editedAccount })
    }
    res.send({ code: 404 })
  } catch (e) {
    res.send({ code: 500 })
  }
}