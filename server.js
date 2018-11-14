const coap    = require('coap') // or coap
    , server  = coap.createServer()

server.on('request', function(req, res) {
  console.log('request', req.payload.toString());
  res.end('ok')
})

server.listen(function() {
  console.log('server started')
})
