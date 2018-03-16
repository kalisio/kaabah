let http = require('http')
let os = require('os')
let express = require('express')
let gracefulShutdown = require('./lib/graceful-shutdown')
let colorGen = require('./lib/color-generator')
let round = require('./lib/round-precision')

let app = express()
let port = Number(process.env.NODE_PORT) || 80

let server = http.createServer(app)
app.use(gracefulShutdown(server, { maxWaitTimeout: 10000 }))

app.get('/', (req, res) => {
  let msg = [
    `Hello from ${os.userInfo().username}@${os.hostname()}`,
    `System platform: ${os.platform()}`,
    `System release: ${os.release()}`,
    `System cpus: ${os.cpus().length}`,
    `System uptime: ${os.uptime()}s`,
    `System avg load: ${round(os.loadavg()[0], 3)}`,
    `System free mem: ${convertKBtoGB(os.freemem())}/${convertKBtoGB(os.totalmem())} GB`,
    `System network interfaces: ${Object.keys(os.networkInterfaces()).join(', ')}`
  ]
  res.send(msg.map(span).join('<br/>'))
})

server.listen(port) && console.log(`Listening on port ${port}`)

// Helper functions
let convertKBtoGB = (number) => round(number / Math.pow(2, 30), 2)
let span = (text) => `<span style="color:${colorGen()}">${text}</span>`

