import { Request, Response } from "express";
import { AssessmentTemplate } from "../../models/AssessmentTemplate";
import { ApiResponse } from "../../shared/types/api.response";
import { TokenPayload } from "../../shared/types/token.payload";
import { findTemplateById, findTemplates } from "./template.service";
import { ListTemplateParams, SubmitTemplate, TemplatePaginate } from "./template.type";

export async function submitTemplate(req: Request, res: Response<ApiResponse<AssessmentTemplate>>) {
    try {
        const body: SubmitTemplate = req.body
        const user: TokenPayload = req['user']
        
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

export async function getTemplates(req: Request, res: Response<ApiResponse<TemplatePaginate>>) {
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