#!/home/quim/node-v6.11.4-linux-x64/bin/node

const net = require('net')

let client = new net.Socket()

client.connect(5000,'127.0.0.1', function(){
  console.log('Client connected')
  client.write('Hola!')
})

client.on('data', function(data){
  console.log(data)
  client.destroy()
})

client.on('close', function(){
  console.log('Connection closed')
})

