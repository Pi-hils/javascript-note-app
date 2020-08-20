(function (exports) {

  function NoteListView(noteListModel){
    this.noteListModel = noteListModel;
  }

  NoteListView.prototype.viewNote = function(){

    // console.log(this.noteListModel.noteList());
        // loop through what is in line 12(html) to get the list within the noteListModel
     this.noteListModel.noteList();
     //finnal html = ''
    // at the end of empty string, retun variable
    //loop through and use the plus operator

    //console browser var a = 1,2,3, can I use the forEach.
    var viewinglist = this.noteListModel.noteList().forEach(item => console.log(item));
    console.log(viewinglist)
     //array, call 
       return ('<u><li><div>' + '</div></li></u>')
  }; 

   
   exports.NoteListView = NoteListView;

})(this);

