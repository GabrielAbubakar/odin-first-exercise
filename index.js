const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express()



app.get('/', (req, res) => {
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
})

app.get('/about', (req, res) => {
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
})

app.get('/contact-me', (req, res) => {
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
})

app.get('*', (req, res) => {
    fs.readFile('./404.html', function (err, data) {
        res.writeHead(404)
        res.write(data)
        return res.end()
    })
})

app.listen(8080)

console.log('server started')