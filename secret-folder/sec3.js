var AWS = require('aws-sdk');
let secret = 'VERZVs+/nd56Z+/Qxy1mzEqqBwUS1l9D4YbqmPoO'

AWS.config.update({
  accessKeyId: 'AKIAIGEOPTU4KRW6GK6Q',
  // ruleid: hardcoded-aws-secretaccesskey
  secretAccessKey: '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'});

import { LambdaClient, InvokeCommand } from '@aws-sdk'

const { stringify } = JSON

const lambdaClient = new LambdaClient({
 credentials: {
  accessKeyId: 'ABC',
  // ruleid: hardcoded-aws-secretaccesskey
  secretAccessKey: secret,
}
})


const lambdaClient = new LambdaClient({
 credentials: {
  accessKeyId: 'ABC',
  // ok: hardcoded-aws-secretaccesskey
  secretAccessKey: conf.secret,
}
})
