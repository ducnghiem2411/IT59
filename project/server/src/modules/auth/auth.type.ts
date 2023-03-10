export interface SignUpParams {
  accountType: 'admin' | 'teacher' | 'student'
  classroomId: string
  accountName: string
  fullName: string
  password: string
  email: string
  phone: string
}

export interface SignIn {
  accountName: string
  password: string
}
