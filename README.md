# Server

upload-server.js

## Config 

At top of file, set : port, extensions and your upload folder

At runtime, set node env 

- PORT=<host_port>
- EXT=<csv_extensions>
- UPLOADS=<uploads_folder>

## Run

node upload-server

PORT=1234 node upload-server

EXT=png,jpg,gif node upload-server

UPLOADS=/home/me/uploads node upload-server


# Client

upload.js

## Config

At top of file, set : port, and server address

At runtime, set node env 

- PORT=<host_port>
- HOST=<host_ip>

## Run

node upload /path/to/myVideo.mp4

PORT=1234 node upload /path/to/myVideo.mp4

PORT=1234 HOST=192.168.2.144 node upload /path/to/myVideo.mp4

