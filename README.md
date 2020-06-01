# Library

```js
const uploader = require(`index.js`)
const server   = uploader.Server( port, extensions_array, uploads_folder )
const client   = uploader.Client( port, host, file )
```


# Server

upload-server.js


## Config 

At top of file, set : port, extensions and your upload folder

At runtime, set node env 

- PORT=<host_port>
- EXT=<csv_extensions>
- UPLOADS=<uploads_folder>


## Run from code

```js
const uploader = require(`.`)
const server   = uploader.Server( port, extensions_array, uploads_folder )
```


## Run from console

```sh
node upload-server
```


### Override defaults with env variables

```sh
PORT=1234 node upload-server
EXT=png,jpg,gif node upload-server
UPLOADS=/home/me/uploads node upload-server
```


# Client

upload.js


## Config

At top of file, set : port, and server address

At runtime, set node env 

- PORT=<host_port>
- HOST=<host_ip>
- FILE=<upload_file>


## Run from code

```js
const uploader = require(`.`)
const client   = uploader.Client( port, host, file )
```


## Run from console

```sh
node upload /path/to/myVideo.mp4
```


### Override defaults with env variables

```sh
PORT=1234 node upload /path/to/myVideo.mp4
HOST=192.168.2.144 node upload /path/to/myVideo.mp4
```
