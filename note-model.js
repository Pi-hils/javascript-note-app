(function(exports) {
  function Notes(text) {
    this.text = text;
  };

Notes.prototype = (function (){

  function notescontent() {
    return(this.text);
  };

  return {
    notescontent
  };
 
})();
exports.Notes = Notes;
})(this);

