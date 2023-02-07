import { Account } from "../../models/Account"

export interface ListAccountParams {
    page: number
    pageSize: number
    accountType?: 'admin' | 'teacher' | 'student'
    classroomId?: string
    isApproved?: boolean
}

export interface AccountPaginate {
    total: number, 
    data: Account[] 
}