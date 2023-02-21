import { Accounts } from "../../mongodb";
import { SignUpParams } from "./auth.type";
import * as uuid from 'uuid'

export async function createAccount(params: SignUpParams) {
    const { accountName, accountType } = params
    await Accounts.insertOne({
        accountId: uuid.v4(),
        accountName,
        accountType,
        
    })
}