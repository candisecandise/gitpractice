const Mock = require('mockjs')
var template = {
  'data|10': [{
    'date': '2016-05-02',
    'name': '王小虎',
    'address': '南京市浦口区浦口大道 1111 号'
  }],
  'newdata|6': [{
    'date': '2016-05-02',
    'name': '刘大虎',
    'address': '南京市江宁区XX大道 2222 号'
  }]

}
Mock.mock('/api/data', template)
