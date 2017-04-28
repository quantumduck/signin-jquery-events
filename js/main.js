$(function() {
  flashMessage('Ready!');
  formTags = $('.modal, .modal *');

});

function flashMessage(message) {
  var status = $('.hello').first();
  var originalText = status.text();
  status.text(message);
  setTimeout(function() {
    status.text(originalText);
  }, 500);
}

function fadeInTags(tags) {
  for (var i = 0; i < formTags.length; i++) {
    var finalBGColor = formTags[i].style['background-color'];
    var finalTransparency = 1;
    if (finalBGColor.substring(0,4) === "rgba") {
      finalTransparency = lastArgument(finalBGColor);
    }
  }
}

function lastArgument(string) {
  // Return one argument from a function string
  while (string.indexOf(',') >= 0) {
    string = string.substring(string.indexOf(',') + 1, string.length);
  }
  while (string[0] === ' ') {
    string = string.substring(1, string.length);
  }
  if (string[string.length - 1] === ')') {
    string = string.substring(0, string.length - 1);
  }
  return string;
}
