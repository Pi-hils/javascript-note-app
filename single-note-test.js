(function(exports){
  function singleNoteTest(){
    var notes = new Notes('Fave drink: Seltzer');
    var singleline = new SingleNoteLine(notes);
    // notes.singleNote()

    if(singleline.singleNote() != '<div>Fave drink: Seltzer</div>'){
      throw new Error('No singleNote');
    }
  };
  singleNoteTest();
})();