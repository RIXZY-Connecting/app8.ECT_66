const express = require('express')
const app = express()
const port = 8000

app.get('/',(request,response)=>{
response.send(`
    <!doctype html>
    <html>
        <head><title>Express.jst</title></head>
    <body>
        <h3>Welcome to Express.jst</h3>
        <b>Express.jst Fast , unopinionated, minimalist<br>
        <web framework for Node.js></b>
    </body>
    </html>
`)
})
app.listen(port,() => console.log('Server Listening on port '+ port))