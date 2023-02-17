import { Request, Response } from 'express'
import { Account } from '../../models/Account';
import { ApiResponse } from '../../shared/types/api.response';
import { AuthRequest } from '../../shared/types/auth.request';
import { editAccountById, findAccountById, listAccount } from './account.service';
import { AccountPaginate, EditAccountParams, ListAccountParams } from './account.type';

export async function getListAccount(req: Request, res: Response): Promise<ApiResponse<AccountPaginate>> {
    try {
        const { page, pageSize, accountType, classroomId, isApproved }: ListAccountParams = req.query as any

        const data = await listAccount({
            page: Number(page),
            pageSize: Number(pageSize),
            accountType,
            classroomId,
            isApproved: isApproved && Boolean(isApproved)
        })

        return { code: 200, data }
    } catch (e) {
        return { code: 500 }
    }
}

export async function getAccountById(req: Request, res: Response): Promise<ApiResponse<Account>> {
    try {
        const { accountId } = req.params
        
        const account = await findAccountById(accountId)

        if (!account) {
            return { code: 404 }
        }

        return { code: 200, data: account }
    } catch (e) {
        return { code: 500 }
    }
}

export async function editAccount(req: AuthRequest, res: Response): Promise<ApiResponse<Account>> {
    try {
        const body: EditAccountParams = req.body
        return await editAccountById()
    } catch (e) {
        return { code: 500 }
    }
}