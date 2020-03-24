function runFunction() {

  var userWord = document.getElementById("userText").value;
  var userWordLength = userWord.length;

  var userWord1 = userWord.charAt(0);
  var userWord2 = userWord.charAt(1);
  var userWord3 = userWord.charAt(2);
  var userWord4 = userWord.charAt(3);
  var userWord5 = userWord.charAt(4);
  var userWord6 = userWord.charAt(5);
  var userWord7 = userWord.charAt(6);
  var userWord8 = userWord.charAt(7);
  var userWord9 = userWord.charAt(8);
  var userWord10 = userWord.charAt(9);


  if ( userWordLength == 0 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' +
                              '<div class="scoop1"></div>' + '<div class="cone"></div>';
  }

  else if ( userWordLength == 1 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 2 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 3 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 4 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="scoop4">' + userWord4 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 5 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="scoop4">' + userWord4 + '</div>' + '<div class="scoop5">' + userWord5 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 6 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="scoop4">' + userWord4 + '</div>' + '<div class="scoop5">' + userWord5 + '</div>' +
                              '<div class="scoop6">' + userWord6 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 7 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="scoop4">' + userWord4 + '</div>' + '<div class="scoop5">' + userWord5 + '</div>' +
                              '<div class="scoop6">' + userWord6 + '</div>' + '<div class="scoop7">' + userWord7 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 8 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="scoop4">' + userWord4 + '</div>' + '<div class="scoop5">' + userWord5 + '</div>' +
                              '<div class="scoop6">' + userWord6 + '</div>' + '<div class="scoop7">' + userWord7 + '</div>' +
                              '<div class="scoop8">' + userWord8 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 9 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="scoop4">' + userWord4 + '</div>' + '<div class="scoop5">' + userWord5 + '</div>' +
                              '<div class="scoop6">' + userWord6 + '</div>' + '<div class="scoop7">' + userWord7 + '</div>' +
                              '<div class="scoop8">' + userWord8 + '</div>' + '<div class="scoop9">' + userWord9 + '</div>' +
                              '<div class="cone"></div>';
  }

  else if ( userWordLength == 10 ) {
    targetDivider.innerHTML = '<p class="stem">C</p>' + '<div class="cherry"></div>' + '<div class="scoop1">' + userWord1 + '</div>' +
                              '<div class="scoop2">' + userWord2 + '</div>' + '<div class="scoop3">' + userWord3 + '</div>' +
                              '<div class="scoop4">' + userWord4 + '</div>' + '<div class="scoop5">' + userWord5 + '</div>' +
                              '<div class="scoop6">' + userWord6 + '</div>' + '<div class="scoop7">' + userWord7 + '</div>' +
                              '<div class="scoop8">' + userWord8 + '</div>' + '<div class="scoop9">' + userWord9 + '</div>' +
                              '<div class="scoop10">' + userWord10 + '</div>' + '<div class="cone"></div>';
  }

  else {

  }

}
