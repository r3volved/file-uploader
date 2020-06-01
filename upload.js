/* - CONFIGURE - */
const port = process.env.PORT || 1337
const host = process.env.HOST || '127.0.0.1'
/* ------------- */


require(`${__dirname}/client`)( port, host )
