// import { Request, Response } from 'express'
// import { Account } from '../../models/Account';
// import { ApiResponse } from '../../shared/types/api.response';
// import { createAccount } from './auth.service';
// import { SignUpParams } from './auth.type';

// export async function signUp(req: Request, res: Response): Promise<ApiResponse<Account>> {
//     try {
//         const { }: SignUpParams = req.body

//         const data = await createAccount({})

//         return { code: 200 }
//     } catch (e) {
//         return { code: 500 }
//     }
// }


// export async function signIn(req: Request, res: Response): Promise<ApiResponse<{ token: string }>> {
//     try {
//         const { page, pageSize, accountType, classroomId, isApproved }: ListAccountParams = req.query as any

//         const data = await listAccount({
//             page: Number(page),
//             pageSize: Number(pageSize),
//             accountType,
//             classroomId,
//             isApproved: isApproved && Boolean(isApproved)
//         })

//         return { code: 200, data }
//     } catch (e) {
//         return { code: 500 }
//     }
// }