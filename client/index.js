module.exports = ( port, host ) => {

    //Get video path from 3rd argument [ nodepath, filepath, videofile ]
    const video_path = (process.argv[2]||'').replace(/^\./,__dirname)
    const path_folders = video_path.split(/\/|\\/)
    const converted_path = path_folders
        .splice(0,path_folders.length-1)
        .concat([ `converted_${path_folders[0]}` ])
        .join("/")

    //If no video path provided, throw error and instructions
    if( !video_path.length ) {
        console.error(`Please provide a video file`)
        console.error('$', 'node', 'upload', '/path/to/video.mov')
        process.exit(0)
    }

    //Prepare filesystem
    const { createReadStream, createWriteStream, existsSync } = require('fs')
        
    //If video does not exist, yell at user
    if( !existsSync(video_path) ) {
        console.error(`Cannot find file: ${video_path}`)
        process.exit(0)
    }

    let converted = null

    //Prepare socket client
    const net = require('net')
    const socket = new net.Socket()
        
    //Watch for socket for ok status
    socket.on('data', async (data) => {

        //Watch for responses back from server

        if( data.toString() == 'ok' ) {
     
            console.log('Streaming file...')
        
            //Create a node readable stream to the video
            const video = createReadStream(video_path)

            //When error, pipe to console
            video.on('error', console.error)

            //When readable stream opens, pipe the contents to the socket
            video.on('open', () => video.pipe(socket))

        } else {
        
            console.log(data.toString())
            socket.end()
        
        } 
        
    });

    //Watch for socket to close
    socket.on('close', () => console.log('Done'))

    //On connection, send the filename
    socket.connect(port, host, () => socket.write(video_path))
            
}
