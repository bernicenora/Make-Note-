//Variables
const saveBtn = document.getElementById('saveBtn');
const noteList = document.getElementById('note-list');


//Event Listeners

eventListeners();



//Functions
//Event Listener Function
function eventListeners(){
    //Add a note 
    saveBtn.addEventListener('click', addNote);
    
    // Remove a note
    noteList.addEventListener('click', removeNote);
    }

//Add a note by filling up the form
function addNote(){
    let creator = document.getElementById('creator').value;
    let note = document.getElementById('note').value;

   // console.log(creator);
   // console.log(note);

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

// Function to remove note
function removeNote(e){
    
    if (e.target.classList.contains('remove-note')){
        e.target.parentElement.remove();
    }
}

// Add Note to Local Storage
function addNoteLocalStorage(creator,note){
    
    let notes = getNotesFromStorage(creator,note);
    
    notes.push(creator+','+note);
    //console.log(notes);

    //Converet the Reminder array into a string
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Get existing Notes from Local Storage

function getNotesFromStorage(creator,note){
    let notes;
    let creatorLS;
    const notesLS = localStorage.getItem('notes');

    // Get the value, if null is returned, then we create an empty array
    if (notesLS === null){
        notes = [];
    }else{
        notes = JSON.parse(creatorLS+','+notesLS);
    }
    return notes;
}

