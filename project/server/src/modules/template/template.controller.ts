import { Request, Response } from "express";
import { AssessmentTemplate } from "../../models/AssessmentTemplate";
import { ApiResponse } from "../../shared/types/api.response";
import { findTemplates } from "./template.service";
import { ListTemplateParams, TemplatePaginate } from "./template.type";

export async function submitTemplate(req: Request, res: Response<ApiResponse<AssessmentTemplate>>) {
    try {
        const body = req.body
    } catch (e) {
        res.send({ code: 500 })
    }
}

export async function getTemplateById(req: Request, res: Response<ApiResponse<AssessmentTemplate>>) {
    try {
        const { templateId } = req.params
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