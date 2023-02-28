import { AssessmentTemplate } from '../../models/AssessmentTemplate'

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

export interface TemplatePaginate {
  total: number
  data: AssessmentTemplate[]
}
