/**
 * Created by Administrator on 2017/6/12 0012.
 */
var webServer = require('ws').Server;
var webserver = new webServer({port:3000})
var clientMap = new Object;
var i =0;
webserver.on('connection',function (client) {
    client.name=++i;
    clientMap[client.name]=client;
    client.on('message',function (data) {
        console.log('客户端发来消息'+data)
        huifu(data,client)
    })
})
function huifu(message,client) {
    for(var k in clientMap){
        clientMap[k].send(client.name+'说: '+message)
    }
}