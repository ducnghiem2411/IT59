import { Filter } from "mongodb";
import { Account } from "../../models/Account";
import { Accounts } from "../../mongodb";
import { validatePaginationParams } from "../../shared/utils";
import { ListAccountParams } from "./account.dto";

async function findAccountById(accountId: number): Promise<Account | null> {
    return await Accounts.findOne({ accountId })
}

async function listAccount(params: ListAccountParams): Promise<{ total: number, data: Account[] }> {
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
    const total = await Accounts.countDocuments()
    return { total, data }
}