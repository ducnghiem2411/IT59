import { apiInstance } from 'api'

export async function uploadFile(image: File) {
  try {
    const response = await apiInstance().post('/upload/send', {
      file: image,
    })
    const data: any = response.data
    console.log('uploadFile', data.data)
    return data.data
  } catch (error) {
    throw error
  }
}
