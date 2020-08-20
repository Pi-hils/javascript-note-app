(function(exports){
  function NoteListModel() {
    this.list = [];
  };

    NoteListModel.prototype = (function(){
      function noteList() {
        console.log(this.list);
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