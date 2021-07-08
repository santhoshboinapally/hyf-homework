const class07Students = ["a", "b"];

function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("You cannot add an empty string to a class 07");
    } else if (studentName === 'Queen') {
        class07Students.push(studentName);
        console.log("Queen is added to the class 07");
    } else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class 07");
    } else if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    } else {
        class07Students.push(studentName);
        console.log("Student " + studentName + " is added to Class 07");
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}
addStudentToClass("e");
addStudentToClass("f");
addStudentToClass("a");
addStudentToClass("b");
addStudentToClass("c");
addStudentToClass("d");
addStudentToClass("king");
addStudentToClass("Queen");
console.log(class07Students);
console.log("The number of students in the class is " + getNumberOfStudents());