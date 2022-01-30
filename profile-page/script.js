console.log("page loaded...");

var request = document.querySelector("#request");
var accept = document.querySelector("#Accept");

function edit() {
    username.innerText = "Ellie C"
}

function connection(id) {
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
}

function Add(id) {
    var element= document.querySelector(id);
    element.remove();
    request.innerText--;
    accept.innerText++;
}

