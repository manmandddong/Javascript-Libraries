const native=net.zhuoweizhang.mcpelauncher.ScriptManager;
var isOn=0;var text="Default Message";var seq=50;
var ctu=0;

function sendChat(str){
native.nativeClientMessage("<"+Player.getName(Server.getAllPlayers()[0])+"> "+str);
native.nativeSendChat(str);
}

function procCmd(cmd){
if(cmd.split(" ")[0]=="speech"){
switch(cmd.split(" ")[1]){
case "on":
isOn=1;
clientMessage("Speech is on");
break;
case "off":
clientMessage("Speech is off");
isOn=0;
break;
case "set":
if(parseInt(cmd.split(" ")[cmd.split(" ").length-1])==cmd.split(" ")[cmd.split(" ").length-1]){
text=cmd.split(" ").slice(2,cmd.split(" ").length-1).join(" ");
seq=cmd.split(" ")[cmd.split(" ").length-1];
clientMessage("Text:"+text+",Sequence:"+seq);
}
else clientMessage("Invalid sequence");
break;
default:
clientMessage("That command is invalid");
}
}
}

function modTick(){
if(++ctu>=seq*20&&isOn){
ctu=0;sendChat(text);
}
}
