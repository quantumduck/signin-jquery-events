$(function() {
  flashMessage('Ready!');
  form = $('.modal').first();

});

function flashMessage(message) {
  var status = $('.hello').first();
  var originalText = status.text();
  status.text(message);
  setTimeout(function() {
    status.text(originalText);
  }, 500);
}
