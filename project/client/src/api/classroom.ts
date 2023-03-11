import { apiInstance } from 'api'

export async function getClassroomList(page: number, pageSize: number) {
  try {
    const response = await apiInstance().get(`/classroom?page=${page}&pageSize=${pageSize}`)
    const data: any = response.data
    console.log('getClassroomList', data.data)
    return data.data
  } catch (error) {
    throw error
  }
}
