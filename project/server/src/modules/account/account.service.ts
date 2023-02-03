import { Account } from "../../models/Account";
import { Accounts } from "../../mongodb";
import { validatePaginationParams } from "../../shared/utils";
import { ListAccountParams } from "./account.dto";

async function findAccountById(accountId: number): Promise<Account | null> {
    return await Accounts.findOne({ accountId })
}

async function listAccount(params: ListAccountParams): Promise<{ total: number, data: Account[] }> {
    validatePaginationParams(params.page, params.pageSize)
    
    const data = await Accounts.find(params).toArray()
    const total = await Accounts.countDocuments()
    return { total, data }
}