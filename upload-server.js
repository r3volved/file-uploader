//Server port
const port = process.env.PORT || 1337
//Server allowed extensions
const extentions = process.env.EXT 
    ? process.env.EXT.split(",").map(s => s.trim()) 
    : ['zip']
//Server uploads directory
const uploads = process.env.UPLOADS || `./uploads`



console.log(`~ Initializing upload server ~`)

//Initialize the server
const uploader = require(`.`)
const server   = uploader.Server( port, extentions, uploads )

console.log(`Upload server is listening for files on port ${port}\n`)
