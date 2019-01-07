$( document ).ready(function() {
  $("#demo01").animatedModal();

  var audio = document.getElementsByTagName("audio")[0];
  var audioPour = document.getElementsByTagName("audio")[1];
  var audioEgg = document.getElementsByTagName("audio")[2];
  var audioIce1 = document.getElementsByTagName("audio")[3];
  var audioIce2 = document.getElementsByTagName("audio")[4];
  var audioShake = document.getElementsByTagName("audio")[5];
  var audioDryShake = document.getElementsByTagName("audio")[6];
  var audioGlassPour = document.getElementsByTagName("audio")[7];
  var audioDash = document.getElementsByTagName("audio")[8];
  var audioApplause = document.getElementsByTagName("audio")[9];

  // Handles the mute/unmute function of the background music
  $('#volume').data("muted", false);
  var muted = false;
  $('#volume').click(function() {
    if(muted == false){
      audio.pause();
      $('#volume').css("background", "url(images/mute.ico)");
      muted = true;
    }
    else{
      audio.play();
      $('#volume').css("background", "url(images/unmute.ico)");
      muted = false;
    }
  });

  $("#mixButton").click(function() {
    audio.play();
    $('#description').fadeOut();
    $('#description').fadeOut();
    $('#mixButton').fadeOut();
    $('#homeImage').fadeOut();
    $('.ingredients').delay(500).fadeIn();
    $('#volume').delay(500).fadeIn();
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

  $("#whiskeyButton").click(function() {
    if(whiskeyAdded == true){
      if(poured == false){
        $('#hint').text("HINT! Maybe it is not the best idea to add more whiskey!");
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
      }
      if(poured==true){
        $('#hint').text("HINT! Not a good idea to add whiskey after pouring the drink!");
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
      }
    }
    else{
      console.log("whiskey added");
      audioPour.play();
      whiskeyAdded = true;
    }
  });

  $("#lemonButton").click(function() {
    if(lemonAdded == true){
      if(poured == false){
        $('#hint').text("HINT! Maybe it is not the best idea to add more lemon juice!");
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
      }
      if(poured==true){
        $('#hint').text("HINT! Not a good idea to add lemon juice after pouring the drink!");
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
      }
    }
    else{
      audioPour.play();
      lemonAdded = true;
    }
  });

  $("#angosturaButton").click(function() {
    if(poured == false){
      $('#hint').text("HINT! Angostura should not be mixed into the drink! Use it to top your masterpiece off!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
    }
    else{
      audioDash.play();
      angosturaAdded = true;
    }
  });

  $("#eggButton").click(function() {
    if(eggAdded == true){
      $('#hint').text("HINT! Let's calm down with the eggs. You are not trying to make breakfast!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
      if(poured==true){
        $('#hint').text("HINT! Don't just put raw eggwhite in a poured drink!");
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
      }

    }
    else{
      audioEgg.play();
      eggAdded = true;
    }
  });

  $("#iceBUtton").click(function() {
    if(iceAdded==true){
      $('#hint').text("HINT! You have already added ice! Add too much and you will water down the drink!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
    }
    if(dryShaked==false || iceAdded==true){
      if(dryShaked == false){
        $('#hint').text("HINT! Remeber to dry shake all the ingredients before you add ice!");
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
        console.log(dryShaked);
        console.log(shaked);
      }
      if(poured==true){
        $('#hint').text("HINT! Not a good idea to add ice afterhand!");
        console.log(dryShaked);
        console.log(shaked);
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
      }

    }
    if (dryShaked==true && iceAdded==false){
      audioIce2.play();
      audioIce2.play();
      audioIce2.play();
      iceAdded = true;
    }
  });

  $("#syrupButton").click(function() {
    if(syrupAdded == true){
      $('#hint').text("HINT! Let's calm down with the sugar, are you trying to get diabetes?");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
      if(poured==true){
        // $('#homeImage').fadeOut();
        $('#hint').text("HINT! Are you trying to top the drink with symple syrup, really?");
        $('#hint').fadeIn();
        $('#hint').delay(3000).fadeOut();
      }

    }
    else{
      audioPour.play();
      syrupAdded = true;
    }
  });

  $("#shakeButton").click(function() {
    if(poured==true){
      $('#hint').text("HINT! What are you trying to shake? Your shaker is empty!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
    }
    if(whiskeyAdded==false && lemonAdded==false && eggAdded==false && syrupAdded==false && dryShaked==false){
      $('#hint').text("HINT! What are you trying to shake? Your shaker is empty!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
    }
    if(whiskeyAdded==true && lemonAdded==true && eggAdded==true && syrupAdded==true && dryShaked==false && poured==false){
      audioDryShake.play();
      $("body").effect( "shake", {times:18, distance:80, direction:"left"}, 3000 );
      dryShaked = true;
    }
    if(dryShaked == true && iceAdded==true && poured==false){
      audioShake.play();
      $("body").effect( "shake", {times:46, distance:80, direction:"left"}, 7800 );
      shaked = true;
    }
  });

  $("#pourButton").click(function(){
    if(poured==true){
      $('#hint').text("HINT! What are you trying to pour? Your shaker is empty!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
    }
    if(shaked == true && poured==false){
      $('#container').fadeOut();
      $('#homeImage').delay(500).fadeIn();
      audioGlassPour.play();
      poured = true;
    }
  });

  $("#serveButton").click(function(){
    if(poured==false){
      $('#hint').text("HINT! Come on! You're not nearly ready to serve!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
    }
    if(angosturaAdded==false && poured==true){
      $('#hint').text("HINT! Remeber to put on some angostura for a final touch!");
      $('#hint').fadeIn();
      $('#hint').delay(3000).fadeOut();
    }
     if(poured==true && angosturaAdded==true){
      audioApplause.play();
      $('#homeImage').fadeOut();
      $('#container').fadeOut();
      $('.ingredients').fadeOut();
      $('#shakeButton').fadeOut();
      $('#pourButton').fadeOut();
      $('#serveButton').fadeOut();
      $('#shaker').fadeOut();
      $('#hint').css("display", "none");
      $('#congrats').delay(500).fadeIn();
      $('#congrats').delay(3000).fadeOut();
      $('.information').delay(6000).fadeIn('slow');
     }
  });

  $("#helpButton").click(function(){
    $("#recipeButton").click();
  });

  $("#historyButton").click(function(){
    $('#modalText').css("display", "block");
    $('#sourRecipe').css("display", "none");
    $('#modalText').css("top", "auto");
    $('#modalText').css("right", "auto");
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
    $('#modalText').css("top", "95px");
    $('#modalText').css("right", "10px");
    $('#modalText').text("The Whiskey Sour is all about flavor balance. The drink is very simple, just a spirit, some fresh lemon juice, sugar and water. Too much lemon is just plain harsh. Too much sugar is cloying. Somewhere in between is a simple, tasty refresher. Like the Old Fashioned, it provides a welcome break from the flavor complexities of more sophisticated cocktails. The idea of the drink is to use just enough lemon to make a counterpoint to the whiskey, and just enough sugar to take the edge off the lemon. You don't want to bury the lemon altogether. The drink is a sour, after all.");
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
    $('#modalText').css("top", "95px");
    $('#modalText').css("right", "-20px");
    $('#modalText').text("August 29th is National Whisky Sour Day. Despite that, the creator of this website feels entitled to drink one of these amazing cocktails every morning, as a way of making life just a little better. Judgy people, get out of my face!");
    $("#demo01").animatedModal({
    });
    $("#demo01").click();
  });

  $("#animatedModal").click(function() {
    $(".close-animatedModal").click();
  });

});
