$( document ).ready(function() {

  $("#mixButton").click(function() {
    $('#description').fadeOut();
    $('#mixButton').fadeOut();
    $('#homeImage').fadeOut();
    $('.ingredients').delay(500).fadeIn();
    $('#container').delay(500).fadeIn();
    $('.actions').delay(500).fadeIn().css("display","inline-block");
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
  var poured = false;
  var dryShaked = false;
  var shaked = false;
  var hintsActivated = false

  var totalHeight = 0;
  var mixedColor;

  // $('#yesButton').click(function(){
  //   console.log("YES BUTTON");
  //   $(this).data('clicked', true);
  // });

  $("#whiskeyButton").click(function() {
    if(whiskeyAdded == true){
      if(poured == false){
        $('#hint').text("HINT! Maybe it is not the best idea to add more whiskey!");
        $('#hint').fadeIn();
      }
      if(poured==true){
        $('#hint').text("HINT! Not a good idea to add whiskey after pouring the drink!");
        $('#hint').fadeIn();
        $('#homeImage').fadeOut();
      }
      else{
        $('#container').fadeOut();
      }
      $('#popup').delay(500).fadeIn();
      $('#yesButton').delay(500).fadeIn();
      $('#noButton').delay(500).fadeIn();

      $('#noButton').click(function(){
        $('#hint').fadeOut();
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        if(poured == true){
          $('#homeImage').delay(500).fadeIn();
        }
        else{
          $('#container').delay(500).fadeIn();
        }
      });

      $('#yesButton').click(function(){
        $('#hint').fadeOut();
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      $('.pour').css("background-color", "orange");
      $('.pour').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 50 + "px"}, 2500);
      totalHeight = totalHeight + 50;
      whiskeyAdded = true;
    }
  });

  $("#lemonButton").click(function() {
    if(lemonAdded == true){
      if(poured == false){
        $('#hint').text("HINT! Maybe it is not the best idea to add more lemon juice!");
        $('#hint').fadeIn();
      }
      if(poured==true){
        $('#hint').text("HINT! Not a good idea to add lemon juice after pouring the drink!");
        $('#hint').fadeIn();
        $('#homeImage').fadeOut();
      }
      else{
        $('#container').fadeOut();
      }
      $('#popup').delay(500).fadeIn();
      $('#yesButton').delay(500).fadeIn();
      $('#noButton').delay(500).fadeIn();

      $('#noButton').click(function(){
        $('#hint').fadeOut();
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        if(poured == true){
          $('#homeImage').delay(500).fadeIn();
        }
        else{
          $('#container').delay(500).fadeIn();
        }
      });

      $('#yesButton').click(function(){
        $('#hint').fadeOut();
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      $('.pour2').css("background-color", "yellow");
      $('.pour2').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 30 + "px"}, 2500);
      totalHeight = totalHeight + 50;
      lemonAdded = true;
    }
  });

  $("#angosturaButton").click(function() {
    if(poured == false){
      $('#hint').text("HINT! Angostura should not be mixed into the drink! Use it to top your masterpiece off!");
      $('#hint').fadeIn();
      if(poured==true){
        $('#homeImage').fadeOut();
      }
      else{
        $('#container').fadeOut();
      }
      $('#popup').delay(500).fadeIn();
      $('#yesButton').delay(500).fadeIn();
      $('#noButton').delay(500).fadeIn();

      $('#noButton').click(function(){
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        if(poured == true){
          $('#homeImage').delay(500).fadeIn();
        }
        else{
          $('#container').delay(500).fadeIn();
        }
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
      console.log("Putting on angostura");
      $('.pour3').css("background-color", "red");
      $('.pour3').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 5 + "px"}, 2500);
      totalHeight = totalHeight + 5;
      angosturaAdded = true;
    }
  });

  $("#eggButton").click(function() {
    if(eggAdded == true){
      if(poured==true){
        $('#homeImage').fadeOut();
      }
      else{
        $('#container').fadeOut();
      }
      $('#popup').delay(500).fadeIn();
      $('#yesButton').delay(500).fadeIn();
      $('#noButton').delay(500).fadeIn();

      $('#noButton').click(function(){
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        if(poured == true){
          $('#homeImage').delay(500).fadeIn();
        }
        else{
          $('#container').delay(500).fadeIn();
        }
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
      $('.pour4').css("background-color", "white");
      $('.pour4').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 20 + "px"}, 2500);
      totalHeight = totalHeight + 20;
      eggAdded = true;
    }
  });

  $("#iceBUtton").click(function() {
    if(iceAdded == false && dryShaked==false){
      $('#hint').text("HINT! Remeber to dry shake all the ingredients before you add ice!");
      $('#hint').fadeIn();
      if(poured==true){
        $('#hint').text("HINT! Not a good idea to add ice afterhand!");
        $('#hint').fadeIn();
        $('#homeImage').fadeOut();
      }
      else{
        $('#container').fadeOut();
      }
      $('#popup').delay(500).fadeIn();
      $('#yesButton').delay(500).fadeIn();
      $('#noButton').delay(500).fadeIn();

      $('#noButton').click(function(){
        $('#hint').fadeOut();
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        if(poured == true){
          $('#homeImage').delay(500).fadeIn();
        }
        else{
          $('#container').delay(500).fadeIn();
        }
      });

      $('#yesButton').click(function(){
        $('#hint').fadeOut();
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    if (dryShaked==true){
      $('.pour5').css("background-color", "blue");
      $('.pour5').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 50 + "px"}, 2500);
      totalHeight = totalHeight + 50;
      iceAdded = true;
    }
  });

  $("#syrupButton").click(function() {
    if(syrupAdded == true){
      if(poured==true){
        $('#homeImage').fadeOut();
      }
      else{
        $('#container').fadeOut();
      }
      $('#popup').delay(500).fadeIn();
      $('#yesButton').delay(500).fadeIn();
      $('#noButton').delay(500).fadeIn();

      $('#noButton').click(function(){
        $('#popup').fadeOut();
        $('#yesButton').fadeOut();
        $('#noButton').fadeOut();
        if(poured == true){
          $('#homeImage').delay(500).fadeIn();
        }
        else{
          $('#container').delay(500).fadeIn();
        }
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
      $('.pour6').css("background-color", "darkgrey");
      $('.pour6').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 20 + "px"}, 2500);
      totalHeight = totalHeight + 20;
      syrupAdded = true;
    }
  });

  $("#shakeButton").click(function() {
    if(whiskeyAdded==true && lemonAdded==true && eggAdded==true && syrupAdded==true && dryShaked==false){
      $('#container').effect("shake");
      dryShaked = true;
    }
    if(dryShaked == true && iceAdded==true){
      $('#container').effect("shake");
      shaked = true;
    }
  });

  $("#pourButton").click(function(){
    if(shaked == true){
      $('#container').fadeOut();
      $('#homeImage').delay(500).fadeIn();
      poured = true;
    }
  });

  $("#serveButton").click(function(){
    // if(poured==true && angosturaAdded==true){
      $('#homeImage').fadeOut();
      $('#container').fadeOut();
      $('#congrats').delay(500).fadeIn();
      $('#congrats').delay(2000).fadeOut();
      $('.ingredients').delay(500).fadeOut();
      $('#shakeButton').delay(500).fadeOut();
      $('#pourButton').delay(500).fadeOut();
      $('#serveButton').delay(500).fadeOut();
    // }
      $('.information').delay(4000).fadeIn();
      // $('#sourImage').delay(4000).fadeIn();
      //$('body').css('background-image', 'url(drink.jpeg)');
  });

});
