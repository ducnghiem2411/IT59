import { Classroom } from "../../models/Classroom"

export interface ClassroomPaginate {
    total: number
    data: Classroom[]
}