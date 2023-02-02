import { Account } from "../../models/Account";
import { Accounts } from "../../mongodb";
import { ListAccountFilter } from "./account.dto";

async function findAccountById(accountId: number): Promise<Account | null> {
    return await Accounts.findOne({ accountId })
}

async function listAccount(filter: ListAccountFilter): Promise<{ total: number, data: Account[] }> {

    const data = await Accounts.find(filter).toArray()
    const total = await Accounts.countDocuments()
    return { total, data }
}