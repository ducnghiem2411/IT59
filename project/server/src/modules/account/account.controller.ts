import { Request, Response, NextFunction} from 'express'
import { Account } from '../../models/Account';
import { ApiResponse } from '../../shared/types/api.response';
import { findAccountById } from './account.service';
import { AccountPaginate } from './account.type';

export async function getListAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const { page, pageSize,  } = req.query
        console.log({ page, pageSize });
        
    } catch (e) {
        throw e
    }
}

export async function getAccount(req: Request, res: Response, next: NextFunction): Promise<ApiResponse<Account>> {
    try {
        const { accountId } = req.params
        
        const account = await findAccountById(accountId)

        if (!account) {
            return { code: 404, success: false }
        }

        return { code: 200, success: true, data: account }
    } catch (e) {
        return { code: 500, success: false }
    }
}