
// function addNoteHere(){
//   this.noteListModel.viewNote() = document.getElementById('app').innerHTML;
// }
// addNoteHere();




(function(exports){
  function NoteController(noteListModel){
    this.noteListModel = new NoteListView(noteListModel);
  }

  NoteController.prototype = (function(){
      function addNoteHere(){
        document.getElementById('app').innerHTML = this.noteListModel.viewNote();
      //   console.log(this.noteListModel.viewNote())
      // return(this.noteListModel.viewNote());
      
      };
      return{
        addNoteHere
      };

  })();
  
 exports.NoteController = NoteController
})(this);