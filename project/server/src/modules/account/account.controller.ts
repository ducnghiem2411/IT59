import { Request, Response, NextFunction} from 'express'

export async function getListAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const { page, pageSize } = req.query
        console.log({ page, pageSize });
        
    } catch (e) {
        throw e
    }
}

export async function getAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const { accountId } = req.params
        console.log({ accountId });
        
    } catch (e) {
        throw e
    }
}