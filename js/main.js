$(function() {
  flashMessage('Ready!');
  $('.signin').on('click', function() {
    $('.modal').fadeIn();
  })
  fadeInTags(formTags);
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
  setTimeout(function() {
    tags[0].style['display'] = 'block';
  }, 10 );
  var numSteps = 50;
  var stepLength = 10;
  for (var i = 0; i < tags.length; i++) {
    console.log(i + ':' + tags[i].style['background-color']);
    var finalBGColor = tags[i].style['background-color'];
    var insertPoint = finalBGColor.length - 1;
    if (finalBGColor.substring(0,4) === "rgba") {
      console.log(tags[i].style['background-color']);
      var transparency = 0;
      var finalTransparency = lastArgument(finalBGColor)[1];
      insertPoint = lastArgument(finalBGColor)[0];
      tags[i].style['background-color']
        = finalBGColor.substring(0, insertPoint)  + ', 0)';
      for (var j = 0; j < numSteps; j++) {
        transparency += finalTransparency * (j + 1) / numSteps;
        setTimeout(function() {
          formTags[i].style['background-color']
            = finalBGColor.substring(0, insertPoint)
            + transparency + ')';
        }, stepLength * j);
      }
    } else if (finalBGColor.substring(0,3) === 'rgb') {
      var transparency = 0;
      tags[i].style['background-color']
        = finalBGColor.substring(0, finalBGColor.length - 1)  + ', 0)';
      for (var j = 0; j < numSteps; j++) {
        transparency += (j + 1) / numSteps;
        setTimeout(function() {
          formTags[i].style['background-color']
            = finalBGColor.substring(0, insertPoint) + ', '
            + transparency + ')';
        }, stepLength * j);
      }
    }
  }
}

function lastArgument(string) {
  // Return one argument from a function string
  var argIndex = 0;
  while (string.indexOf(',') >= 0) {
    argIndex += string.indexOf(',') + 1;
    string = string.substring(string.indexOf(',') + 1, string.length);
  }
  while (string[0] === ' ') {
    string = string.substring(1, string.length);
    argIndex++;
  }
  if (string[string.length - 1] === ')') {
    string = string.substring(0, string.length - 1);
  }
  return [argIndex, string];
}
