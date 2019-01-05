$( document ).ready(function() {

  $("#mixButton").click(function() {
    $('#description').fadeOut();
    $('#mixButton').fadeOut();
    $('#homeImage').fadeOut();
    $('.ingredients').delay(500).fadeIn();
    $('#container').delay(500).fadeIn();
    $('#shakeButton').delay(500).fadeIn();
    $('#pourButton').delay(500).fadeIn();
    $('#serveButton').delay(500).fadeIn();
  });

  $('#topCenter').click(function() {
    location.reload();
  });

  var whiskeyAdded = false;
  var lemonAdded = false;
  var angosturaAdded = false;
  var eggAdded = false;
  var iceAdded = false;
  var syrupAdded = false;

  var totalHeight = 0;
  var mixedColor;

  $('#yesButton').click(function(){
    console.log("YES BUTTON");
    $(this).data('clicked', true);
  });

  $("#whiskeyButton").click(function() {
    if(whiskeyAdded == true){
      $('#container').fadeOut();
      $('#popup').delay(500).fadeIn();
      $('#yesButton').delay(500).fadeIn();
      $('#noButton').delay(500).fadeIn();

      $('#noButton').click(function(){
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        $('#container').delay(500).fadeIn();
      });

      $('#yesButton').click(function(){
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      $('.pour').css("background-color", "orange");
      $('#liquid').css("background-color", "orange");
      $('.pour').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 50 + "px"}, 2500);
      totalHeight = totalHeight + 50;
      whiskeyAdded = true;
    }
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

  $("#shakeButton").click(function() {
    $('#container').effect("shake");
  });

});
