const coap  = require('coap') // or coap
      ,INTERVAL = 10000;

var payload = {
  frame: {
      "Time": "2018-06-07T15:40:46",
      "Values":{
        "Energy": 00000000,
        "Period": 00000000,
        "Power": 00000000,
        "Factor": 00000000,
        "Voltage": 00000000,
        "Current": 00000000,
        "Switch": 0,
        "Overconsumption": 0,
        "Overvoltage": 0,
        "Supply_Cutting": 0,
        "Short_circuit": 0,
      },
  }
}

sendRequest = () => {
  let req = coap.request({
    host: '172.17.0.2',
    pathname: '/SOLARIS-SMARTTH-4',
    method: 'POST',
    confirmable: false,
  });
  console.log('Request', req);

  req.write(JSON.stringify(payload.frame));
  req.on('response', function(res) {
    console.log('response', res.payload.toString());
  })
  req.end()
}

telemetria = () => {
  setInterval(sendRequest, INTERVAL)
}

telemetria()
