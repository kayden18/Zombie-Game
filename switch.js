var gameLevel = 1;
var password = "mellon";

var userName = prompt("Enter Your Name");
var passWordCheck;

function CheckPassword() {
    switch (gameLevel) {
        case 1:
            passwordCheck = prompt(userName + " speak friend and enter.");
            if (password == passWordCheck) {
                gameLevel = 2;
        }
        CheckPassword();
        break;

        case 2:
        alert(gameLevel);
        break;
        
        case 3:

            break;
    }
}
//test change
CheckPassword ();