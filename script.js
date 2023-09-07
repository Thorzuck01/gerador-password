var passwordbox = document.getElementById("fpass");
var tam = 16;

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "@#$%*()+._~|{}[]<>/-=;";

var all = upperCase + lowerCase + number + symbol

function createPass(){
   
    var password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() *  number.length)];
    password += symbol[Math.floor(Math.random() *  symbol.length)];

    while(tam > password.length){
        password += all[Math.floor(Math.random() *  all.length)];
    }
    passwordbox.value = password;


}

function copyPass(){
    passwordbox.select()
    document.execCommand("copy");
}





