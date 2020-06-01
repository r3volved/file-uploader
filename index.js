module.exports = {

    //this.Server( port, extentions, uploads )
    Server : ( ...a ) => require(`${__dirname}/server`)( ...a ),

    //this.Client( port, host )
    Client : ( ...a ) => require(`${__dirname}/client`)( ...a ),

}
