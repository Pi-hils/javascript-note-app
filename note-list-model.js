(function(exports){
  function NoteListModel() {
    this.list = [];
  };

    NoteListModel.prototype = (function(){
      function noteList() {
        return this.list
      };

      function addNote(text) {
        this.list.push(text)
      }

    return {
      noteList,
      addNote
    };
    })();
    exports.NoteListModel = NoteListModel;
})(this);




   
  // })();
  // exports.Notes = Notes;
  // })(this);