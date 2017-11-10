
exports.action = function(data, next){
  
  var date = new Date();

  var text = 'aucune idée pour le moment';
  
  // Callback with TTS
  next({'tts': text});
}
