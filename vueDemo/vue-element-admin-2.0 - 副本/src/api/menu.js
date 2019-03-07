import request from '@/utils/request'

export function menuList(query) {
  return request({
    url: '/test/menu',
    method: 'get',
    params: query
  })
}
