var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    if (req.url == '/') {

        fs.readFile('./index.html', function (err, data) {
            if (err) {
                res.writeHead(404)
                res.write("Contents not found")
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            }
        })

    } else if (req.url == '/about') {

        fs.readFile('./about.html', function (err, data) {
            if (err) {
                res.writeHead(404)
                res.write("Contents not found")
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            }
        })

    } else if (req.url == '/contact-me') {

        fs.readFile('./contact-me.html', function (err, data) {
            if (err) {
                res.writeHead(404)
                res.write("Contents not found")
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            }
        })

    }

    else {
        fs.readFile('./404.html', function (err, data) {
            res.writeHead(404)
            res.write(data)
            return res.end()
        })
    }
})

server.listen(8080)

console.log('server started')