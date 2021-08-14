let displayName = "";
let toDoList = [];

function getReply(command) {
    const arrayName = command.split(" ");
    if (command.includes("Hello my name is")) {
        displayName = arrayName[4];
        return `Nice to see you ${displayName}`;
    } else if (command.includes("What is your name")) {
        return `My name is ${displayName}`;
    }
    if (command == "") {
        return "Please say your name";
    }
    if (command.includes(arrayName)) {
        return `Hey ${displayName} i know you`;
    } // adding and removig to todoList
    else if (command == "Add fishing to my todolist") {
        toDoList.push("fishing");
        return "fishing added to todolist";
    } else if (command == "Add singing in the shower to my todolist") {
        toDoList.push("singing in the shower");
        return "singing in the shower added todolist";
    } else if (command == "Remove fishing from my todolist") {
        toDoList.shift();
        return "Removed fishing from your todolist";
    } else if (command == "What is on my todolist?") {
        toDoList.unshift("fishing");
        return toDoList;
    }
    // To display what day is today.
    if (command == "What day is it today?") {
        const days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];

        return new Date().toLocaleDateString('en-US', { day: 'numeric', year: 'numeric', month: 'long' });
   
}
//function for simple math.
function airthOperator(command) {
    let resultNum = command.split('');
    let firstNum = parseInt(resultNum[0]);
    let secondNum = parseInt(resultNum[1]);
    if (command.includes("+")) {
        return firstNum + secondNum;
    }
    if (command.includes("*")) {
        return firstNum * secondNum;
    }
}
// Funtion to Set timer.
setTimeout(function () { console.log("Timer is done"); }, 20000);

console.log(getReply(""));
console.log(getReply("Hello my name is yeshitha"));
console.log(getReply("What is your name"));
console.log(getReply("yeshitha"));
console.log(getReply("Add fishing to my todolist"));
console.log(getReply("Add singing in the shower to my todolist"));
console.log(toDoList);
console.log(getReply("Remove fishing from my todolist"));
console.log(toDoList);
console.log(getReply("What is on my todolist?"));
console.log(getReply("What day is it today?"));
console.log(airthOperator("what is 4+8"));
console.log(airthOperator("what is 4*8"));
