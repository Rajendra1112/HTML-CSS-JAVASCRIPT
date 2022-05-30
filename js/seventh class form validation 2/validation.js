function validationcomment() {
    var com = document.getElementById("comment").value;
    var required = 40;
    var remaining = required - com.length;
    if (remaining > 0) {
        showMessage(remaining + " characters left", "errcomment", "red");
    }
    else {
        showMessage("valid comment", "errcomment", "green");
    }
}

function validationradio() {
    var radio1 = document.getElementById("radio1").checked;
    var radio2 = document.getElementById("radio2").checked;
    if (radio1 == true)
        showMessage("you can processed forward", "errradio", "blue");
    else if (radio2 == true)
        showMessage("you can processed forward", "errradio", "green");
    else
        showMessage("You can't processed forward", "errradio", "red");
}

function showMessage(message, location, color) {
    document.getElementById(location).innerHTML = message;
    document.getElementById(location).style.color = color;
}
