import { Filter, ObjectId } from "mongodb";
import { AssessmentTemplate, Comment } from "../../models/AssessmentTemplate";
import { Accounts, AssessmentTemplates, Classrooms } from "../../mongodb";
import { TokenPayload } from "../../shared/types/token.payload";
import { getTemplateTimeframe, validatePaginationParams } from "../../shared/utils";
import { CommentOnTemplate, ListTemplateParams, SubmitTemplate } from "./template.type";

export async function findTemplates(params: ListTemplateParams) {
    const { censorId, creatorId, classRoomId, isApproved } = params
    validatePaginationParams(params.page, params.pageSize)
    
    let filter: Filter<AssessmentTemplate> = {}

    if (censorId) {
        filter['censor.accountId'] = censorId
    }
    if (creatorId) {
        filter['creator.accountId'] = creatorId
    }
    if (classRoomId) {
        filter['classRoom.classroomId'] = classRoomId
    }
    if (isApproved !== undefined) {
        filter.isApproved = isApproved
    }

    const page = Number(params.page)
    const pageSize = Number(params.pageSize)

    const data = await AssessmentTemplates.find(filter).skip(page*pageSize).limit(pageSize).toArray()
    const total = await AssessmentTemplates.countDocuments(filter)

    const totalPage = Math.ceil(pageSize/total)
    return { total, data, page, totalPage }
}

export async function findTemplateById(id: string) {
    return await AssessmentTemplates.findOne({ _id: new ObjectId(id) })
}

export async function saveTemplate(creatorId: string, params: SubmitTemplate) {
    const creator = await Accounts.findOne({ accountId: creatorId })
    if (!creator || !creator.classroomId) {
        return
    }

    const classroom = await Classrooms.findOne({ classroomId: creator.classroomId })
    if (!classroom) {
        return
    }

    const censors = await Accounts.find({ classroomId: creator.classroomId, accountType: 'teacher' }).toArray()
    if (!censors.length) {
        return
    }

    const { timeframe, startTime, endTime } = getTemplateTimeframe(new Date().getTime())
    let template: AssessmentTemplate = {
        creator,
        censors,
        classroom,
        evidence: params.evidence,
        images: params.images,
        point: params.point,
        timeframe,
        startTime,
        endTime,
        comments: [],
        isApproved: false,
        createdAt: new Date().getTime()
    }

    const { insertedId } = await AssessmentTemplates.insertOne(template)
    template._id = insertedId
    return template    
}

export async function saveComment(user: TokenPayload, params: CommentOnTemplate) {
    const template = await AssessmentTemplates.findOne({ _id: new Object(params.templateId) })

    if (!template) {
        return
    }

    const comment: Comment =  {
        creatorId: user.accountId,
        image: params.image,
        text: params.text,
        createdAt: new Date().getTime()
    }

    await AssessmentTemplates.updateOne(
        { _id: new ObjectId(params.templateId) },
        { $push: { comments: comment }}
    )
    return comment
}

export async function approveTemplate(user: TokenPayload, templateId: string) {
    const template = await AssessmentTemplates.findOne({ _id: new ObjectId(templateId) })

    if (!template) {
        return
    }
    const censorsId = template.censors.map(i => i.accountId)

    if (!censorsId.includes(user.accountId)) {
        return
    }

    const updatedTemplate = await AssessmentTemplates.findOneAndUpdate(
        { _id: new ObjectId(templateId) },
        { $set: { isApproved: true } },
        { returnDocument: 'after' }
    )

    return updatedTemplate.value
}