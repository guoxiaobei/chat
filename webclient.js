/**
 * Created by Administrator on 2017/6/12 0012.
 */
var ws = new WebSocket('ws://127.0.0.1:3000')
ws.onmessage=function(){}

       ws.onmessage =function (event) {
        var box=document.getElementById('box')

        //console.log(event.data)
        var str = event.data.split('说')[0];
        if(str==1){
            box.innerHTML+='<span class="left">'+event.data+'</span>'
        }else{
            box.innerHTML+='<span class="right">'+event.data+'</span>'
        }
    }