import { Request, Response } from 'express'
import { Classroom } from '../../models/Classroom'
import { ApiResponse, PaginateResponse } from '../../shared/types/api.response'
import { editClassroomById, findClassroomById, listClassroom, saveClassroom } from './classroom.service'
import { CreateClassParams, EditClassroomParams, ListClassroomParams } from './classroom.type'

export async function createClass(req: Request, res: Response<ApiResponse<Classroom>>) {
  try {
    const body: CreateClassParams = req.body
    const data = await saveClassroom(body)
    if (data) {
      res.send({ code: 200, data })
    }
    res.send({ code: 403 })
  } catch (error) {
    res.send({ code: 500 })
  }
}

export async function editClass(req: Request, res: Response<ApiResponse<Classroom>>) {
  try {
    const body: EditClassroomParams = req.body
    const data = await editClassroomById(body)
    if (data) {
      res.send({ code: 200, data })
    }
    res.send({ code: 404 })
  } catch (error) {
    res.send({ code: 500 })
  }
}

export async function getClassById(req: Request, res: Response<ApiResponse<Classroom>>) {
  try {
    const { classroomId } = req.params
    const data = await findClassroomById(classroomId)
    if (data) {
        res.send({ code: 200, data })
    }
    res.send({ code: 404 })
  } catch (error) {
    res.send({ code: 500 })
  }
}

export async function getClasses(req: Request, res: Response<ApiResponse<PaginateResponse<Classroom>>>) {
  try {
    const { page, pageSize }: ListClassroomParams = req.query as any
    const data = await listClassroom({ 
      page: Number(page), 
      pageSize: Number(pageSize)
    })
    res.send({ code: 200, data })
  } catch (error) {
    res.send({ code: 500 })
  }
}
