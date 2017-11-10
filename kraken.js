
exports.action = function(data, next){
  
  var date = new Date();

  var text = 'connection au serveur';
  
  // Callback with TTS
  next({'tts': text});
}
