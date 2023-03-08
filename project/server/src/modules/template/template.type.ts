export interface SubmitTemplate {
  evidence: string
  images: string[]
}

export interface CommentOnTemplate {
  templateId: string
  text: string
  image: string
}

export interface ListTemplateParams {
  page: number
  pageSize: number
  creatorId?: string
  censorId?: string
  classRoomId?: string
  isApproved?: boolean
}