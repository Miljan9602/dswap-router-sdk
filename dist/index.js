
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dswap-router-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dswap-router-sdk.cjs.development.js')
}
