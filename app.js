const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    if (req.url === '/') {
        res.end('Welcome to this trial page!')
    } else if (req.url === '/about') {
        res.end('This is the about page')
    } else {
        res.end(`<h1>Error Bestie</h1>  <p> Oops ! </p>`)
    }
})

server.listen(8000)