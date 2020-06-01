module.exports = ( port, extentions, uploads ) => {

    //Regular expressions for extensions and end of file
    const extRegExp = new RegExp(`[${extentions.join('|')}]$`, 'i')
    const eofRegExp = new RegExp(`^eof$`, 'i')


    //Prepare filesystem and socket server
    const { createReadStream, createWriteStream, existsSync, mkdirSync } = require('fs')
    const net = require('net');


    //If uploads folder doesn't exist, create it
    if( !existsSync(uploads) ) mkdirSync(uploads)


    //Create a new socket server
    const server = net.createServer((socket) => {

        /* For each socket connection... */
        
        console.log('new client request')
        
        let filename = null
        let file = null

        //Watch for client data
	    socket.on('data', async ( data ) => {
            
            //debuffer the data for checks
	        let chunk = data.toString()
	        
	        //If the chunk matches file extension, set filename and open writable stream 
            if( !file && chunk.match(extRegExp) ) {

                filename = chunk.split(/\/|\\/)
                filename = filename[filename.length-1]
                file = createWriteStream(`${uploads}/${filename}`)
                file.on('close',() => console.log('completed', filename))
                
                console.log('uploading', filename)

                //Send back ok status to accept file data
                socket.write(`ok`)

            } else if( file && file.writable ) {

                //If there's a file open, wrtie the data to it
                file.write(data)
                            
                console.log('streaming', filename)

            } else {
                
                //Something went wrong, probably bad extension
                //socket.write(`Error: I can only accept ${extentions.join(', ')}`)            
                socket.destroy()
                
            }
            
	    }) 
        
        //Watch for client disconnect
	    socket.on('close', () => {
	        if( file && file.writable ) file.close()
	        if( !file ) console.error('client disconnected unexpectedly')
	    })

    })

    //Start the socket server
    server.listen(port);
}
