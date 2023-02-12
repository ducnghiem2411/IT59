import { Filter } from "mongodb";
import { Account } from "../../models/Account";
import { Accounts } from "../../mongodb";
import { validatePaginationParams } from "../../shared/utils";
import { AccountPaginate, EditAccountParams, ListAccountParams } from "./account.type";

export async function findAccountById(accountId: string): Promise<Account | null> {
    return await Accounts.findOne({ accountId })
}

export async function listAccount(params: ListAccountParams): Promise<AccountPaginate> {
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

    const data = await Accounts.find(filter).limit(pageSize).skip(pageSize*page).toArray()
    const total = await Accounts.countDocuments(filter)
    return { total, data }
}

export async function editAccountById(accountId: number, params: EditAccountParams) {
    
}