// const { NoteList } = require("./note-list-model");

// const { NoteListModel } = require("./note-list-model");
// const { NoteListView } = require("./note-list-view");


(function(exports) {

  function noteList(){

    var note = new NoteListModel();

    if(note.list.length !== 0){
      throw new Error('Your list is not empty')
  }
}

  noteList();
}
)();

(function(exports){

  function addNoteTest(){
    var morenote = new NoteListModel();
    morenote.addNote('More JS')

    if(morenote.list[0] !== 'More JS'){
      throw new Error('NOT HERE')
    }
  }
 addNoteTest();
})();

//test
(function(exports){

  function viewNoteTest(){
    var notes = new NoteListModel();
    notes.addNote('Hiya')
    var views = new NoteListView(notes);
    
    expectedhtml = '<ul><li><div>Hiya</div></li></ul>'
    // create new NoteListModel
    //add item NotelistModel('')
    //add NoteListView -instance
    //call method viewNote on NoteListView
    if(views.viewNote() != expectedhtml){
      throw new Error ('Can not View')
    }
  }
viewNoteTest();
})();

(function(exports){

  function viewNoteTest1(){
    var notes = new NoteListModel();
    var views = new NoteListView(notes);

    // create new NoteListModel
    //add item NotelistModel('')
    //add NoteListView -instance
    //call method viewNote on NoteListView
    if(views.viewNote() != '<ul><li><div></div></li></ul>'){
      throw new Error ('Can not View')
    }
  }
viewNoteTest1();
})();

(function(exports){

  function viewNoteTest2(){
    var notes = new NoteListModel();
    notes.addNote('Hiya')
    var views = new NoteListView(notes);

    expectedhtml = '<ul><li><div>Hiya</div></li></ul>'
    // create new NoteListModel
    //add item NotelistModel('')
    //add NoteListView -instance
    //call method viewNote on NoteListView
    if(views.viewNote() != expectedhtml){
      throw new Error ('Can not View')
    }
  }
viewNoteTest2();
})();

(function(exports){

  function viewNoteTest3(){
    var notes = new NoteListModel();
    notes.addNote('Hiya')
    notes.addNote('Bonjour')
    var views =  new NoteListView(notes);
    expectedhtml = '<ul><li><div>Hiya</div></li><li><div>Bonjour</div></li></ul>'
    // create new NoteListModel
    //add item NotelistModel('')
    //add NoteListView -instance
    //call method viewNote on NoteListView
    if(views.viewNote() != expectedhtml) {
      throw new Error ('Can not View')
    }
  }
viewNoteTest3();
})();



// (function(exports){
//   function viewNote() {
//     var morenote = new NoteList();
//     morenote.addNote('Can View');
    
//     if(morenote.viewNote != '<ul><li>Can View</li></ul'){
//       throw new Error('Can not access views')
//     };
//   };
//   // viewNote();
// })();