import request from '@/utils/request'

export function tableList(query) {
  return request({
    url: '/test/list',
    method: 'get',
    params: query
  })
}

export function chartList(query) {
  return request({
    url: '/test/chart',
    method: 'get',
    params: query
  })
}
