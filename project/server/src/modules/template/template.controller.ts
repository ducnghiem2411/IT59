import { Request, Response } from 'express'
import { AssessmentTemplate, Comment } from '../../models/AssessmentTemplate'
import { ApiResponse, PaginateResponse } from '../../shared/types/api.response'
import { TokenPayload } from '../../shared/types/token.payload'
import { approveTemplate, findTemplateById, findTemplates, saveComment, saveTemplate } from './template.service'
import { CommentOnTemplate, ListTemplateParams, SubmitTemplate } from './template.type'

export async function submitTemplate(req: Request, res: Response<ApiResponse<AssessmentTemplate>>) {
  try {
    const body: SubmitTemplate = req.body
    const user: TokenPayload = req['user']
    const data = await saveTemplate(user.accountId, body)
    if (data) {
      res.send({ code: 200, data })
    }
    res.send({ code: 400 })
  } catch (e) {
    res.send({ code: 500 })
  }
}

export async function getTemplateById(req: Request, res: Response<ApiResponse<AssessmentTemplate>>) {
  try {
    const { templateId } = req.params
    const data = await findTemplateById(templateId)
    if (data) {
      res.send({ code: 200, data })
    }
    res.send({ code: 404 })
  } catch (e) {
    res.send({ code: 500 })
  }
}

export async function getTemplates(req: Request, res: Response<ApiResponse<PaginateResponse<AssessmentTemplate>>>) {
  try {
    const { page, pageSize, censorId, creatorId, classRoomId, isApproved }: ListTemplateParams = req.query as any
    const data = await findTemplates({
      page: Number(page),
      pageSize: Number(pageSize),
      creatorId,
      censorId,
      classRoomId,
      isApproved: isApproved && Boolean(isApproved),
    })
    res.send({ code: 200, data })
  } catch (e) {
    res.send({ code: 500 })
  }
}

export async function comment(req: Request, res: Response<ApiResponse<Comment>>) {
  try {
    const body: CommentOnTemplate = req.body
    const user: TokenPayload = req['user']

    const data = await saveComment(user, body)
    if (data) {
      res.send({ code: 200, data })
    }
    res.send({ code: 400 })
  } catch (e) {
    res.send({ code: 500 })
  }
}

export async function approve(req: Request, res: Response<ApiResponse<AssessmentTemplate>>) {
    try {
        const body: { templateId: string } = req.body
        const user: TokenPayload = req['user']
    
        const data = await approveTemplate(user, body.templateId)
        if (data) {
          res.send({ code: 200, data })
        }
        res.send({ code: 400 })
      } catch (e) {
        res.send({ code: 500 })
      }
}
