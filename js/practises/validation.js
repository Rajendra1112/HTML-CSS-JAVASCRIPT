function showMessage(message,location,color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;
}

function pswvalidation(){
    var password=document.getElementById("urpsw").value;
    if(password.length==0)
        showMessage("password can't be NULL","errpassword","red");

    else if(password.length<8)
        showMessage("password must contain atleast 8 characters","errpassword","red");
    
    else
        showMessage("valid password","errpassword","green");
}