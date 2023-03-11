import { apiInstance } from 'api'

export async function signIn(username: string, password: string) {
  try {
    const response = await apiInstance().post('/auth/sign-in', {
      accountName: username,
      password: password
    })
    const data: any = response.data
    console.log('signIn', data.data)
    return data.data
  } catch (error) {
    throw error
  }
}

export async function getAccountList(page: number, pageSize: number) {
  try {
    const response = await apiInstance().get(`/account?page=${page}&pageSize=${pageSize}`)
    const data: any = response.data
    console.log('getAccountList', data.data)
    return data.data
  } catch (error) {
    throw error
  }
}
