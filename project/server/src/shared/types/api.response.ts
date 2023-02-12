export interface ApiResponse<Response> {
    code: number
    message?: string
    data?: Response
}