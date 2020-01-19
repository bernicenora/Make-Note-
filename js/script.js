//Variables
const saveBtn = document.getElementById('saveBtn');
const noteList = document.getElementById('note-list');



//Event Listeners

saveBtn.addEventListener('click', addNote);


//Functions

//Add a note by filling up the form
function addNote(){
    let creator = document.getElementById('creator').value;
    let note = document.getElementById('note').value;

    console.log(creator);
    console.log(note);

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-note';
    removeBtn.textContent = "DELETE";

    // Display creator and note on the side as an <div> element
    const div = document.createElement('div'); //create an element called div to house each note detail
    const pName = document.createElement('p'); //Create a paragraph element for the Name or Creator
    const pNote = document.createElement('p'); //Create a paragraph element for the Note
    const newLine = document.createElement('hr'); // Create a Horizontal Element
    pName.textContent = "Created By: "+creator;
    pNote.textContent = note;
    
    div.appendChild(newLine);
    div.appendChild(pNote);
    //Adding the remove Button to each reminder that is generated
    div.appendChild(removeBtn);
    div.appendChild(pName);
    

    // Append the note to the div element
    noteList.appendChild(div);
    
    // Now Save the note to the Local Storage by creating an array
    addNoteLocalStorage(creator,note);
}

function addNoteLocalStorage(){

}