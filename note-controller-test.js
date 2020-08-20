// const { NoteController } = require("./note-controller")

(function(exports){
  function noteControlTest(){
  var noteListModel = new NoteListModel();

  noteListModel.addNote('Fave drink: Seltzer')
  var note = new NoteController(noteListModel);
  note.addNoteHere() 

  if(document.getElementById('app').innerHTML != '<ul><li><div>Fave drink: Seltzer</div></li></ul>'){
    throw new Error('Not controlled')
  }
  }
noteControlTest();
})();
