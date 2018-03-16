let gracefulShutdown = (server, options) => {
  if (!process.env.NODE_ENV) {
    return process.exit(1)
  }
  server.close(() => {
    options.log('Graceful shut down')
    process.exit(0)
  })

  setTimeout(() => {
    options.log(`Forced shut down after ${options.maxWaitTimeout} ms`)
    process.exit(1)
  }, options.maxWaitTimeout)
}

module.exports = (server, options = {}) => {
  Object.assign(options, {
    maxWaitTimeout: 10000,
    log: console.log.bind(console)
  })
  let shouldExit = false
  ;['SIGINT', 'SIGTERM'].forEach((signal) => {
    process.on(signal, () => {
      options.log(`Caught ${signal} signal, shutting down ...`)
      shouldExit = true
      gracefulShutdown(server, options)
    })
  })

  return (req, res, next) => {
    if (!shouldExit) {
      return next()
    }
    res.set('Connection', 'close')
    res.send(502)
  }
}
