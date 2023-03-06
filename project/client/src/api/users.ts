import jwt from 'jsonwebtoken'
import Mock from 'api/mock'
import apiInstance from 'api'

const JWT_SECRET = 'jwt_secret_key'
const JWT_VALIDITY = '7 days'

const userList = [
  {
    id: 1,
    role: 'SA',
    name: 'Jason Alexander',
    username: 'jason_alexander',
    email: 'demo@example.com',
    avatar: '/static/avatar/001-man.svg',
    age: 25
    // password: 'v&)3?2]:'
  }
]

Mock.onPost('/api/auth/login').reply(async (config) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const { email } = JSON.parse(config.data)
    const user = userList.find((user) => user.email === email)
    if (!user) {
      return [400, { message: 'Invalid email or password' }]
    }
    const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_VALIDITY
    })
    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    ]
  } catch (error) {
    console.error(error)
    return [500, { message: 'Internal server error' }]
  }
})

Mock.onGet('/api/auth/profile').reply((config) => {
  try {
    //@ts-ignore
    const { Authorization } = config.headers
    if (!Authorization) {
      return [401, { message: 'Invalid Authorization token' }]
    }
    const accessToken = Authorization.split(' ')[1]
    const { userId }: any = jwt.verify(accessToken, JWT_SECRET)
    const user = userList.find((u) => u.id === userId)

    if (!user) {
      return [401, { message: 'Invalid authorization token' }]
    }

    return [
      200,
      {
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    ]
  } catch (err) {
    console.error(err)
    return [500, { message: 'Internal server error' }]
  }
})

export async function signIn(username: string, password: string) {
  try {
    const response = await apiInstance().post('/auth/sign-in', {
      accountName: username,
      password: password
    })

    const data: any = response.data

    return data.data
  } catch (error) {
    throw error
  }
}

export async function getAccountList(page: number, pageSize: number) {
  try {
    const response = await apiInstance().get(`/account?page=${page}&pageSize=${pageSize}`)

    const data: any = response.data

    return data.data
  } catch (error) {
    throw error
  }
}
