/**
 * Created by Administrator on 2017/6/12 0012.
 */
var net = require('net')
var port = 9000;
var host = '127.0.0.1'

var client = new net.Socket()
client.setEnconding = 'utf-8';
client.connect(port,host,function () {
    client.write('你好')
})
client.on('data',function (data) {
    console.log('服务器回复'+data)
    say()
})

var readline = require('readline')
var r1 = readline.createInterface({
    //设置标准的输入和输出
    input:process.stdin,
    output:process.stdout
})
function say() {
    r1.question('请输入要发送的内容',function (inputstr) {
        if(inputstr!='bye'){
            client.write(inputstr)
        }else{
            client.destroy()
            r1.close()
        }
    })
}