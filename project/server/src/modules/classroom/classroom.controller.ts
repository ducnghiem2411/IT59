import { Request, Response } from 'express'
import { Classroom } from '../../models/Classroom'
import { ApiResponse } from '../../shared/types/api.response'
import { ClassroomPaginate } from './classroom.type'

export async function createClass(req: Request, res: Response<ApiResponse<Classroom>>) {
  try {
  } catch (error) {}
}

export async function editClass(req: Request, res: Response<ApiResponse<Classroom>>) {
  try {
  } catch (error) {}
}

export async function getClassById(req: Request, res: Response<ApiResponse<Classroom>>) {
  try {
  } catch (error) {}
}

export async function getClasses(req: Request, res: Response<ApiResponse<ClassroomPaginate>>) {
  try {
  } catch (error) {}
}
