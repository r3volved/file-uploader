/* - CONFIGURE - */
const port = process.env.PORT || 1337   //App port
const extentions = process.env.EXT
    ? process.env.EXT.split(",") 
    : ['zip']                           //Allowed extensions
const uploads = process.env.UPLOADS || `${__dirname}/uploads`  //Uploads directory
/* ------------- */


require(`${__dirname}/server`)( port, extentions, uploads )
