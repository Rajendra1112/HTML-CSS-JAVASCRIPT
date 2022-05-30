function validname(){
    var uname=document.getElementById("uname").value;
    if(uname.length==0)
    showMessage("name field can't be empty","errname","red");
    else if(uname.length<5)
    showMessage("not enough characters","errname","red");

    else if(!uname.match(/^[a-zA-Z]{5,30}\s{1}[a-zA-Z]{3,30}$/))
    showMessage("enter first name and last name with space","errname","red");
    else
    showMessage("valid name","errname","green");
}
function validphone(){
    var phone=document.getElementById("pnum").value;
    if(phone.length==0)
    showMessage("phone field cannot be empty","errphone","red");
    else if(!phone.match(/^[0-9]*$/))
    showMessage("enter number only","errphone","red");
    else if(phone.substr(0,2)!="98")
    showMessage("must star with 98","errphone","blue");
    else if(phone.length!=10)
    showMessage("enter exactly 10 digits","errphone","red");
    else
    showMessage("valid phone number","errphone","green");
}
function showMessage(message,location,color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;
}


