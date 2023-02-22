export interface TokenPayload {
  accountId: string
  accountName: string
  accountType: 'admin' | 'teacher' | 'student'
}
