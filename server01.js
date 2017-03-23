const { readFile } = require('fs')
const { createServer } = require('http')
const server = createServer()

server.on('request', ({ url, method, headers }, res) => {
    readFile('index.html', (err, buff) => {
//comment out line 8 then uncomment line 10 for new message
        res.end(buff)
   })
    // res.end('<h1>Hello World</h1>')
})
server.listen(8080)