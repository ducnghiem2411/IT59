export interface ApiResponse<Response> {
    code: number
    message?: string
    data?: Response
}

export interface PaginateResponse<Data> {
    data: Data[]
    total: number
    page: number
    totalPage: number
}