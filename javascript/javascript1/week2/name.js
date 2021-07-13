function getFullname(firstname, surname, useFormalName) {
    if (useFormalName) {
        let formal = "Lord";
        return formal + "" + firstname + "" + surname;
    } else {
        return firstname + surname;
    }
}
const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2 = getFullname("Benjamin", "Hughes", false);
console.log(fullname1);
console.log(fullname2);

//if we have to show the name based on gender 
function getFullname(firstname, surname, useformalname, gender) {
    if (useformalname === true && gender === 'male') {
        console.log("Lord" + "" + firstname + "" + surname);
    } else { console.log('Queen' + "" + firstname + "" + surname); }
}
getFullname('Benjamin', 'Hughes', true, 'male');
getFullname('Julia', 'Hughes');
