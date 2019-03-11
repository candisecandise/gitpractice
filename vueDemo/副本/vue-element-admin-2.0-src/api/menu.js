import request from '@/utils/request'

export function menuList(query) {
  return request({
    url: '/test/routes',
    method: 'post',
    params: query
  })
}
