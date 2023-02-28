import { Filter, ObjectId } from "mongodb";
import { AssessmentTemplate } from "../../models/AssessmentTemplate";
import { Accounts, AssessmentTemplates, Classrooms } from "../../mongodb";
import { validatePaginationParams } from "../../shared/utils";
import { ListTemplateParams, SubmitTemplate } from "./template.type";

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

    return { data, total }
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

    let template: AssessmentTemplate = {
        creator,
        censors,
        classroom,
        evidence: params.evidence,
        images: params.images,
        comments: [],
        isApproved: false,
        createdAt: new Date().getTime()
    }

    const { insertedId } = await AssessmentTemplates.insertOne(template)
    template._id = insertedId
    return template    
}