const notes = [];
//saving note
function saveNote(content, id) {
    const objNote = { content: content, id: id };
    notes.push(objNote);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do Cooking", 3);
saveNote("Pickup Child", 4);
console.log(notes);
//Get Note
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            console.log(notes[i]);
        } else {
            console.log("record not found");
        }
    }
}
getNote(3);
//Logout Note
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(
            "The note id: " +
            notes[i].id +
            " has the note Activity: " +
            notes[i].content
        );
    }
}
logOutNotesFormatted();