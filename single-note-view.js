(function(exports){
  function SingleNoteLine(notes){
    this.notes = notes
  }
  
  SingleNoteLine.prototype = (function(){
    function singleNote(){
      return '<div>'+ (this.notes.notescontent()) +'</div>';
    }
    return {
      singleNote
    };
  })();

  exports.SingleNoteLine = SingleNoteLine;
})(this);