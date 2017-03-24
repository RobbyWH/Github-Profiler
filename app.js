

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

// TODO: [x] Read the data
let request = https.request(options, (response) => {
  let body = ''
  response.on('data', (data) => {
    body = body + data
  })
  response.on('end', () => {
    // TODO: Parse the data
    // Convert String to JSON
    let profile = JSON.parse(body)
    console.log(profile)
  })
})

request.end()

request.on('error', (e) => {
  console.error(e)
})
