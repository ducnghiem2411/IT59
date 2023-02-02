import { IndexDescription, ObjectId } from "mongodb"
import { Account } from "./Account"

export interface AssessmentTemplate {
    _id?: ObjectId
    creator: Account
    censor: Account
    evidence: string
    images: string[]
    comments?: Comment
    isApproved: boolean
    approvedAt: number
    createdAt: number
}

interface Comment {
    creator: Account
    text: string
    image: string
    createdAt: number
}

export const AssessmentTemplateIndexes: IndexDescription[] = [
    { key: { "creator.id" : 1 }, unique: true }
]