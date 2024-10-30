const prompt = require("prompt-sync")()
let grade = prompt ("What grade are you: ")
if (grade<=60){
    console.log("You are in Grade F")
}
else if (grade<=69){
    console.log("You are in grade D")
}
else if (grade<=79){
    console.log("You are in Grade C")
}
else if(grade<=89){
    console.log("You are in Grade B")
}
else {
    console.log("You are in Grade A")
}