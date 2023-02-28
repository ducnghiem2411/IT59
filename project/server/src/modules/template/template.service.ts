import { Filter, ObjectId } from "mongodb";
import { AssessmentTemplate } from "../../models/AssessmentTemplate";
import { AssessmentTemplates } from "../../mongodb";
import { validatePaginationParams } from "../../shared/utils";
import { ListTemplateParams } from "./template.type";

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

export async function saveTemplate() {
    
}