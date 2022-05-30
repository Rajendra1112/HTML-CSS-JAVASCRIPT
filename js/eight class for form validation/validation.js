function showmessage(message,location,color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;
}

function validpass(){
    var upass=document.getElementById('upassword').value;
    if(upass.length==0)
    showmessage("please enter password","errorpass","red");
    else if(upass.length<7)
    showmessage("not enouth character","errorpass","red");
    else
    showmessage("valid password","errorpass","green");
}

function validemail(){
    var umail=document.getElementById('uemail').value;
    if(umail.length==0)
    showmessage("please enter email","erroremail","red");
    else
    showmessage("valid email","erroremail","green");
}

function validphone(){
    var pnum=document.getElementById('uphone').value;
    if(pnum.length==0)
    showmessage("please enter your phone no.","errorphone","red");
    else if(pnum.match(/^[0-9]*$/))
    showmessage("please enter number only","errorphone","red");
    else if(pnum.substr(0,2)!="98")
    showmessage("The number must start with 98","errorphone","red");
    else if(pnum!=10)
    showmessage("enter 10 digits number","errorphone","red");
    else
    showmessage("valid phone number","errorphone","green");
}