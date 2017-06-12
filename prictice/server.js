/**
 * Created by Administrator on 2017/6/12 0012.
 */
var net = require('net')
var clientServer = new net.createServer()
var clientMap=new Object;
var i = 0;

clientServer.on('connection',function (client) {
    //console.log('客户端启动了')
    client.name=++i;
    clientMap[client.name]=client;
    client.on('data',function (data) {
        console.log('客户端说')
        huifu(data,client)
    })
})
//message回复的信息
function huifu(message,client) {
    //client.write('消息收到')
    for(var k in clientMap){
        clientMap[k].write(client.name+'说'+message)
    }


}
clientServer.listen(9000)