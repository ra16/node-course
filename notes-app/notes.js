var fs = require('fs');
var notes = loadNotes();
function getNotes() {
    return 'your notes..';
}

function addNotes(title, body) {
    
    var duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });

    if(duplicateNotes.length === 0){
        notes.push({
            title,
            body
        });
    
        saveNotes(notes);
        console.log('new note added');
    } else{
        console.log('title taken');
    }
};

function saveNotes(notes){
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes() {
    try {
        var dataBuffer = fs.readFileSync('notes.json');
        var dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

function removeNotes(title){
    var newNotes = notes.filter(function(note){
        return note.title !== title;
    });

    saveNotes(newNotes);
}

module.exports = {
    getNotes,
    addNotes,
    removeNotes
};