//Variables
const saveBtn = document.getElementById('saveBtn');
const noteList = document.getElementById('note-list');
const obj={};
const objArray = [];

//Event Listeners

eventListeners();



//Functions
//Event Listener Function
function eventListeners(){
    //Add a note 
    saveBtn.addEventListener('click', addNote);
    
    // Remove a note
    noteList.addEventListener('click', removeNote);

    // Document
    document.addEventListener('DOMContentLoaded', printNotesFromLocalStorageOnLoad);
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
    addNoteLocalStorage();
}

// Function to remove note
function removeNote(e){
    
    if (e.target.classList.contains('remove-note')){
        e.target.parentElement.remove();
    }
}

// Add Note to Local Storage
function addNoteLocalStorage(){
    
    let notes = getNotesFromStorage();
    
    //creating the key-value pairs
    let creator = document.getElementById('creator').value;
    let note = document.getElementById('note').value;
   
    obj.creator = creator;
    obj.note = note;

    let jsonstring = JSON.stringify(obj);
    
    //create an array and push the string to the Object Array
    objArray.push(jsonstring);
    
    //store the new note
    localStorage.setItem('notes', objArray);
}

// Get existing Notes from Local Storage

function getNotesFromStorage(){
    let notes;
    const notesLS = localStorage.getItem('notes');
    
    // Get the value, if null is returned, then we create an empty array
    if (notesLS === null){
        notes = [];
    }else{
        console.log("NotesLS = "+(notesLS));
        let notesArray = notesLS.split(",");
        console.log("NotesArray = "+(notesArray));
        notesArray.forEach(function(){
            console.log((notesArray));
        });
        
    }
}

// Prints all the Notes on Load of the Window
function printNotesFromLocalStorageOnLoad(){
    //let notes = getNotesFromStorage(creator,note);
    //console.log(notes);
   /* notes.forEach(function(creator,note){
        // Creating the Remove Button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-note';
        removeBtn.textContent = "DELETE";

        // Display creator and note on the side as an <div> element
        const div = document.createElement('div'); //create an element called div to house each note detail
        const pName = document.createElement('p'); //Create a paragraph element for the Name or Creator
        const pNote = document.createElement('p'); //Create a paragraph element for the Note
        const newLine = document.createElement('hr'); // Create a Horizontal Element

        //Separating out the Creator of the Note and the Creator
        console.log("Notes made it here: "+notes);
        let notesString = toString(JSON.parse(notes));
        console.log("Notes from LS: "+notesString);
        let notesArray = notes.split(',');
        console.log("notesArray0 :"+notesArray[0]);
        console.log("notesArray1 :"+notesArray[1]);
        pName.textContent = "Created By: "+creator;
        pNote.textContent = note;
        
        div.appendChild(newLine);
        div.appendChild(pNote);
        //Adding the remove Button to each reminder that is generated
        div.appendChild(removeBtn);
        div.appendChild(pName);
        

        // Append the note to the div element
        noteList.appendChild(div);
    });*/
}

