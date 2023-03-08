export interface CreateClassParams {
    classroomName: string
}

export interface ListClassroomParams {
    page: number
    pageSize: number
}

export interface EditClassroomParams {
    classroomId: string
    classroomName: string
    accountToAdd: string[]
    accountToRemove: string[]
}