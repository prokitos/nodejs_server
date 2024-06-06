const http = require('http');

const routeHandler = require('./router.js')

const server = http.createServer(routeHandler)

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type' : 'text/plain'});
//     res.end('hello there')
// })

server.listen(3000,'127.0.0.1',() => {
    console.log('server is running')
})