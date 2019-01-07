$( document ).ready(function() {
  $("#demo01").animatedModal();

  var audio = document.getElementsByTagName("audio")[0];


  // Handles the mute/unmute function of the background music
  $('#volume').data("muted", false);
  var muted = false;
  $('#volume').click(function() {
    if(muted == false){
      audio.pause();
      muted = true;
    }
    else{
      audio.play();
      muted = false;
    }
  });

  $("#mixButton").click(function() {
    audio.play();
    // $('body').css("background", "linear-gradient(#374150, #171b20)");
    $('#description').fadeOut();
    $('#description').fadeOut();
    $('#mixButton').fadeOut();
    $('#homeImage').fadeOut();
    $('.ingredients').delay(500).fadeIn();
    $('#shaker').delay(500).fadeIn();
    // $('#container').delay(500).fadeIn();
    $('.actions').delay(500).fadeIn().css("display","inline-block");
  });

  $('#topCenter').click(function() {
    location.reload();
  });

  $('button').easyAudioEffects({
    mp3 : "audio/beep.mp3"
  });

  $('button').easyAudioEffects({
    mp3 : "audio/click.mp3",
    eventType: 'click'
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
        $('#shaker').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      // $('.pour').css("background-color", "orange");
      // $('.pour').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      // $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 50 + "px"}, 2500);
      // totalHeight = totalHeight + 50;
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
        $('#shaker').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      // $('.pour2').css("background-color", "yellow");
      // $('.pour2').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      // $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 30 + "px"}, 2500);
      // totalHeight = totalHeight + 50;
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
        $('#shaker').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      console.log("Putting on angostura");
      // $('.pour3').css("background-color", "red");
      // $('.pour3').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      // $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 5 + "px"}, 2500);
      // totalHeight = totalHeight + 5;
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
        $('#shaker').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      // $('.pour4').css("background-color", "white");
      // $('.pour4').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      // $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 20 + "px"}, 2500);
      // totalHeight = totalHeight + 20;
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
        $('#shaker').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    if (dryShaked==true){
      // $('.pour5').css("background-color", "blue");
      // $('.pour5').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      // $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 50 + "px"}, 2500);
      // totalHeight = totalHeight + 50;
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
        $('#shaker').fadeOut();
        $('#disgusting').delay(500).fadeIn();
        setTimeout(location.reload.bind(location), 2000);
      });

    }
    else{
      // $('.pour6').css("background-color", "darkgrey");
      // $('.pour6').delay(500).animate({height: '360px'}, 1500).delay(2000).slideUp(500);
      // $('#liquid').delay(1900).animate({height: parseInt(totalHeight) + 20 + "px"}, 2500);
      // totalHeight = totalHeight + 20;
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
      $('.ingredients').fadeOut();
      $('#shakeButton').fadeOut();
      $('#pourButton').fadeOut();
      $('#serveButton').fadeOut();
      $('#shaker').fadeOut();
      $('#congrats').delay(500).fadeIn();
      $('#congrats').delay(2000).fadeOut();
    // }
      // $('.information').delay(2500).fadeIn();
      // $('body').css("background", "url(images/tea.jpg)");

    //   setTimeout(function () {
    //   $('body').css("background", "url(images/tea.jpg)");
    // }, 3500);
      $('.information').delay(3000).fadeIn();

      // $("body").stop().animate({opacity: 0},1000,function(){
      //     $(this).css({'background': "url('images/final.jpg')"})
      //          .animate({opacity: 1},{duration:5000});
      //     });
  });

  $("#helpButton").click(function(){
    $("#recipeButton").click();
  });

  $("#historyButton").click(function(){
    $('#modalText').css("display", "block");
    $('#sourRecipe').css("display", "none");
    $('#modalText').css("margin-left", "0px");
    $('#modalText').css("margin-top", "0px");
    $('#animatedModal').css("background", "url(images/history.jpg)");
    $('#modalText').text("The year: 1792. You: a sailor crossing the Atlantic for North America. Food is dried. Water is no good. And scurvy is a constant worry. Enter, the Whiskey Sour! No, really. Although the recipe was not written down until 1862 by Jerry Thomas in The Bartenders Guide, sours were a basic recipe for centuries. According to Brian Petro of The Alcohol Professor, Vice Admiral Edward Vernon of England began mixing a few ingredients together to serve to his crew, to help combat sea-sickness, malnutrition, and scurvy. But because they didn't want an entire ship of intoxicated sailors, they began to water it down with lemon or lime juice. While the British used Gin and Brandy, Americans favored Whiskey, and thus the Whiskey Sour was born.");
    $("#demo01").animatedModal({
    });
    $("#demo01").click();
  });

  $("#tasteButton").click(function(){
    $('#modalText').css("display", "block");
    $('#sourRecipe').css("display", "none");
    $('#animatedModal').css("background", "url(images/turkey.jpg)");
    $('#modalText').css("margin-left", "1200px");
    $('#modalText').css("margin-top", "100px");
    $('#modalText').text("The Whiskey Sour is all about flavor balance. The drink is very simple, just a spirit, some fresh lemon juice, sugar and water. Too much lemon is just plain harsh. Too much sugar is cloying. Somewhere in between is a simple, tasty refresher. Like the Old Fashioned, it provides a welcome break from the flavor complexities of more sophisticated cocktails. The idea of the drink is to use just enough lemon to make a counterpoint to the whiskey, and just enough sugar to take the edge off the lemon. You don't want to bury the lemon altogether. The drink is a sour, after all.");
    $("#demo01").animatedModal({
    });
    $("#demo01").click();
  });

  $("#galleryButton").click(function(){
    $('#modalText').css("display", "block");
    $('#sourRecipe').css("display", "none");
    $('#animatedModal').css("background", "url(whiskey.png)");
    $('#modalText').text("HINT! Not a good idea to add whiskey after pouring the drink!");
    $("#demo01").animatedModal({
    });
    $("#demo01").click();
  });

  $("#recipeButton").click(function(){
    $('#animatedModal').css("background", "url(images/recipe.jpg)");
    $('#modalText').css("display", "none");
    $('#sourRecipe').css("display", "block");
    $("#demo01").animatedModal({
    });
    $("#demo01").click();
  });

  $("#triviaButton").click(function(){
    $('#modalText').css("display", "block");
    $('#sourRecipe').css("display", "none");
    $('#animatedModal').css("background", "url(images/national2.jpg)");
    $('#modalText').css("margin-left", "1200px");
    $('#modalText').css("margin-top", "100px");
    $('#modalText').text("August 29th is National Whisky Sour Day. Despite that, the creator of this website feels entitled to drink one of these amazing cocktails every morning, as a way of making life just a little better. Judgy people, get out of my face!");
    $("#demo01").animatedModal({
    });
    $("#demo01").click();
  });

  $("#garnishButton").click(function(){
    $('#modalText').css("display", "block");
    $('#sourRecipe').css("display", "none");
    $('#animatedModal').css("background", "url(whiskey.png)");
    $('#modalText').text("HINT! Not a good idea to add whiskey after pouring the drink!");
    $("#demo01").animatedModal({
    });
    $("#demo01").click();
  });

  $("#animatedModal").click(function() {
    $(".close-animatedModal").click();
  });

});
