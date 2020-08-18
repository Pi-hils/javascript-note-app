(function(exports) {
  function Notes(text) {
    this.text = text;
  };

Notes.prototype = (function (){

  function notescontent() {
    console.log(this.text);
  };

  return {
    notescontent
  };
 
})();
exports.Notes = Notes;
})(this);

