import { UpdateFilter } from 'mongodb'
import { Classroom } from '../../models/Classroom'
import { Classrooms } from '../../mongodb'
import { PaginateResponse } from '../../shared/types/api.response'
import { validatePaginationParams } from '../../shared/utils'
import { CreateClassParams, EditClassroomParams, ListClassroomParams } from './classroom.type'
import * as uuid from 'uuid'

export async function findClassroomById(classroomId: string): Promise<Classroom | null> {
  return await Classrooms.findOne({ classroomId })
}

export async function listClassroom(params: ListClassroomParams): Promise<PaginateResponse<Classroom>> {
  const { page, pageSize } = params
  validatePaginationParams(page, pageSize)

  const data = await Classrooms.find()
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray()

  const total = await Classrooms.countDocuments()
  const totalPage = Math.ceil(pageSize / total)
  return { total, data, page, totalPage }
}

export async function editClassroomById(params: EditClassroomParams) {
  const { classroomId, classroomName, accountToAdd, accountToRemove } = params

  let update: UpdateFilter<Classroom> = {}

  // To do: update account counting & account in array
  if (classroomName) {
    update.$set = { classroomName }
  }
  const { value } = await Classrooms.findOneAndUpdate(
    { classroomId }, 
    { $set: params }, 
    { returnDocument: 'after' }
  )
  return value
}

export async function saveClassroom(params: CreateClassParams) {
  const newClass: Classroom = {
    classroomId: uuid.v4(),
    classroomName: params.classroomName,
    studentCount: 0,
    studentsId: [],
    teacherCount: 0,
    teachersId: [],
    createdAt: new Date().getTime()
  }
  await Classrooms.insertOne(newClass)
  return newClass
}