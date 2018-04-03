#!/home/quim/node-v6.11.4-linux-x64/bin/node

//NODE JS -> NO SUPORTA DE SERIE IMPORT/EXPORT
const net = require('net')

let server = net.createServer(onClientConnected)

const PORT = '5000'
const ADDRESS = '192.168.204.107'

//server.listen(PORT,'0.0.0.0') això és equivalent al no posar la IP 0.0.0.0
//el que fa és utilitzar totes les ip que té la màquina
server.listen(PORT)

function onClientConnected(socket) {

  //Literal strings `` per poder executar variables.
  console.log(`New client connected ${socket.remoteAddress}:${socket.remotePort}`)

  //socket.destroy()
  //al rebre informacio
  socket.on('data', function(data){
    console.log(data)
    socket.write(data)
  })
}

console.log(`Server started at port: ${PORT}`)