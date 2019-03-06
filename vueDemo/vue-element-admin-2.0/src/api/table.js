import request from '@/utils/request'

export function tableList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}
