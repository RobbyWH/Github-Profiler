

const https = require("https")
const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/robbywh',
  method: 'GET',
  headers: {
    'user-agent': 'nodejs'
  }
}
let request = https.request(options, (response) => {
  console.log("Got response: ", response);
})

request.end()
request.on('error', (e) => {
  console.error(e)
})
