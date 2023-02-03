export interface ListAccountParams {
    page: number
    pageSize: number
    accountType?: 'admin' | 'teacher' | 'student'
    classroomId?: number
    isApproved?: boolean
}