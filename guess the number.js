let gameNum = 25;
let userNum = prompt("guess the number :");
while(userNum != gameNum){
        userNum = prompt("you entered the wrong number. guesss again");
}
console.log("congratulations you entered the right number");