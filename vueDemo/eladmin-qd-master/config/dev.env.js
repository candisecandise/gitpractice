'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:8000"'
  // BASE_API: '"http://10.20.10.29:8000"'
  BASE_API: '"/aa"',
  BASE_API2: '"/bb"'
})
