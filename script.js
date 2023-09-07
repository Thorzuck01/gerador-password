var PasswordBox = document.getElementById("fpass");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var number = "0123456789"; 
var symbols = "@#$%*()+._~|{}[]<>/-=;";
var tam = 16;
var all = upperCase + lowerCase + number + symbols;

var getRandomCharacter = characters => characters[Math.floor(Math.random() * characters.length)]

function createPass(){
    var requiredChars = [
        getRandomCharacter(upperCase),
        getRandomCharacter(lowerCase),
        getRandomCharacter(number),
        getRandomCharacter(symbols)
    ];

    var password = requiredChars.join("");

    while(tam > password.length){
        password += getRandomCharacter(all);
    }

    PasswordBox.value = password;
}

var copyPass = () =>{
    PasswordBox.select();
    document.execCommand("copy");
}
