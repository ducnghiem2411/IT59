export function validatePaginationParams(page: number, pageSize: number) {
  if (page < 0) throw new Error('page should be greater than or equal to 0')
  if (pageSize <= 0) throw new Error('pageSize should be greater than 0')
  if (pageSize >= 1000) throw new Error('pageSize should be lower than 1000')
}

export function getTemplateTimeframe(timestamp: number) {
  return {
    timeframe: new Date(timestamp).toISOString().slice(0, 7),
    startTime: 0,
    endTime: 0
  }
}