import { Request, Response } from "express";
import { AssessmentTemplate } from "../../models/AssessmentTemplate";
import { ApiResponse } from "../../shared/types/api.response";

export async function submitTemplate(req: Request, res: Response<ApiResponse<AssessmentTemplate>>) {
    try {
        const body = req.body
    } catch (e) {
        res.send({ code: 500 })
    }
}