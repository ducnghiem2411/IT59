export interface TokenPayload {
  accountId: string
  accountName: string
  accountType: 'admin' | 'teacher' | 'student'
  classroomId: string | null
  fullName: string
  image: string
  email: string
  phone: string
}
