$(function() {
  

});

function flashMessage(message) {
  var status = $('.status').first();
  var originalText = status.text();
  status.text(message);
  setTimeout(function() {
    status.text(originalText);
  }, 500);
}
