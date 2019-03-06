// module.exports = file => require('@/components/HomeComponents/' + file + '.vue').default
module.exports = file => () => import('@/components/HomeComponents/' + file + '.vue')

