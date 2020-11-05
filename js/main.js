/*
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? )
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
*/

$('.prev').click(function(){
  var currentImage=$('.active');
  console.log(currentImage);
  console.log(currentImage.attr("class"),typeof currentImage.attr("class"),currentImage.hasClass("first"));
  if( currentImage.hasClass("first")){
    currentImage.removeClass('active');
    $('.last').addClass('active');
  } else {
    currentImage.removeClass('active').prev().addClass('active');
  }
})

$('.next').click(function(){
  var currentImage=$('.active');
  console.log(currentImage);
  console.log(currentImage.attr("class"),typeof currentImage.attr("class"),currentImage.hasClass("last"));
  if( currentImage.hasClass("last")){
    currentImage.removeClass('active');
    $('.first').addClass('active');
  } else {
    currentImage.removeClass('active').next().addClass('active');
  }

})

$(document).keydown(function(event){
  console.log(event.which);
  if(event.which === 37){
    var currentImage=$('.active');
    console.log(currentImage);
    console.log(currentImage.attr("class"),typeof currentImage.attr("class"),currentImage.hasClass("first"));
    if( currentImage.hasClass("first")){
      currentImage.removeClass('active');
      $('.last').addClass('active');
    } else {
      currentImage.removeClass('active').prev().addClass('active');
    }
  }

  if(event.which === 39){
    var currentImage=$('.active');
    console.log(currentImage);
    console.log(currentImage.attr("class"),typeof currentImage.attr("class"),currentImage.hasClass("last"));
    if( currentImage.hasClass("last")){
      currentImage.removeClass('active');
      $('.first').addClass('active');
    } else {
      currentImage.removeClass('active').next().addClass('active');
    }
  }
})

/*
Clicchiamo sui pallini e mostriamo l'immagine corrispondente
*/
$('.nav > i').siblings().click(function(event){
  console.log($(this));
  var selectedElementIndex = $(this).index();
  console.log(selectedElementIndex);
  $('.active').removeClass('active');
  $(this).addClass('active');
  $('.images > img ').eq(selectedElementIndex).addClass('active');
});
