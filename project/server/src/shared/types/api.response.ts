export interface ApiResponse<Response> {
    code: number
    success: boolean
    message?: string
    data?: Response
}