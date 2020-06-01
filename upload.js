//Server port
const port = process.env.PORT || 1337
//Server host
const host = process.env.HOST || '127.0.0.1'
//File to upload
const file = process.env.HOST || process.argv[2]





console.log(`~ Initializing upload client ~`)

//Initialize the client
const uploader = require(`.`)
const client   = uploader.Client( port, host, file )
