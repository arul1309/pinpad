function addDot(number) {
    var pinDisplay = document.getElementById("pinDisplay");
    var dot = document.createElement("span");
    dot.textContent = "●"; 
    dot.classList.add("dot");
    pinDisplay.appendChild(dot);
}

function removeDot() {
    var pinDisplay = document.getElementById("pinDisplay");
    pinDisplay.removeChild(pinDisplay.lastChild);
}

function clearPin() {
    var pinDisplay = document.getElementById("pinDisplay");
    pinDisplay.textContent = ""; 
}


function login() {
    var pinDisplay = document.getElementById("pinDisplay");
    pinDisplay.textContent = ""; 
    alert("Login Successful..!");
}