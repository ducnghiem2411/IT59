import { Account } from '../models/Account'
import * as uuid from 'uuid'
import { Classroom } from '../models/Classroom'

const accountSeed: Account[] = [

  // Admin account
  {
    accountId: uuid.v4(),
    accountName: 'admin01',
    accountType: 'admin',
    classroomId: null,
    email: 'admin01@yopmail.com',
    fullName: 'Quản Trị Viên 01',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },
  {
    accountId: uuid.v4(),
    accountName: 'admin02',
    accountType: 'admin',
    classroomId: null,
    email: 'admin02@yopmail.com',
    fullName: 'Quản Trị Viên 02',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },

  // Teacher account
  {
    accountId: uuid.v4(),
    accountName: 'chaudt',
    accountType: 'teacher',
    classroomId: null,
    email: 'chaudt@yopmail.com',
    fullName: 'Đặng Tuấn Châu',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },
  {
    accountId: uuid.v4(),
    accountName: 'lampb',
    accountType: 'teacher',
    classroomId: null,
    email: 'lampb@yopmail.com',
    fullName: 'Phan Bảo Lâm',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },

  // Student account
  {
    accountId: uuid.v4(),
    accountName: 'khangnv',
    accountType: 'student',
    classroomId: null,
    email: 'khangnv@yopmail.com',
    fullName: 'Nguyễn Việt Khang',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },
  {
    accountId: uuid.v4(),
    accountName: 'locnb',
    accountType: 'student',
    classroomId: null,
    email: 'locnb@yopmail.com',
    fullName: 'Nguyễn Bá Lộc',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },
  {
    accountId: uuid.v4(),
    accountName: 'quocha',
    accountType: 'student',
    classroomId: null,
    email: 'quocha@yopmail.com',
    fullName: 'Hồ Anh Quốc',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },
  {
    accountId: uuid.v4(),
    accountName: 'lanld',
    accountType: 'student',
    classroomId: null,
    email: 'lanld@yopmail.com',
    fullName: 'Lê Dương Lan',
    password: '123123',
    phone: '0342343716',
    createdAt: new Date().getTime(),
    image: '',
    creatorId: '',
  },
]

const classroomSeed: Classroom[] = [
  {
    classroomId: uuid.v4(),
    classroomName: 'CHTM-514',
    teacherCount: 0,   
    teachersId: [],
    studentCount: 0,
    studentsId: [],
    createdAt: new Date().getTime()
  },
  {
    classroomId: uuid.v4(),
    classroomName: 'CHTM-414',
    teacherCount: 0,   
    teachersId: [],
    studentCount: 0,
    studentsId: [],
    createdAt: new Date().getTime()
  },
]

export { accountSeed, classroomSeed }