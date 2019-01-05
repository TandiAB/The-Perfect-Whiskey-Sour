$( document ).ready(function() {

  $("#mixButton").click(function() {
    $('#description').fadeOut();
    $('#mixButton').fadeOut();
    $('#homeImage').fadeOut();
    $('.ingredients').delay(500).fadeIn();
    $('#container').delay(500).fadeIn();
  });

  $('#topCenter').click(function() {
    location.reload();
  });

  var totalHeight = 0;
  var mixedColor;

  $("#whiskeyButton").click(function() {
    $('.pour').css("background-color", "orange");
    $('#liquid').css("background-color", "orange");
    $('.pour').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
    $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 50 + "px"}, 2500);
    totalHeight = totalHeight + 50;
  });

  $("#lemonButton").click(function() {
    $('.pour2').css("background-color", "yellow");
    $('.pour2').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
    // $('#liquid').css("background-color", "yellow");
    $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 30 + "px"}, 2500);
    totalHeight = totalHeight + 50;
  });

  $("#angosturaButton").click(function() {
    $('.pour3').css("background-color", "red");
    $('.pour3').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
    $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 5 + "px"}, 2500);
    totalHeight = totalHeight + 50;
  });

  $("#eggButton").click(function() {
    $('.pour4').css("background-color", "white");
    $('.pour4').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
    $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 20 + "px"}, 2500);
    totalHeight = totalHeight + 50;
  });

  $("#iceBUtton").click(function() {
    $('.pour5').css("background-color", "white");
    $('.pour5').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
    $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 50 + "px"}, 2500);
    totalHeight = totalHeight + 50;
  });

  $("#syrupButton").click(function() {
    $('.pour5').css("background-color", "black");
    $('.pour5').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
    $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 25 + "px"}, 2500);
    totalHeight = totalHeight + 50;
  });

});
