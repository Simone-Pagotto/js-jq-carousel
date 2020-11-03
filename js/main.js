/*
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? )
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
*/

$('.prev').click(function(){
  var actualImage=$('.active')
  console.log(actualImage)
  console.log(actualImage.attr("class"),typeof actualImage.attr("class"),actualImage.hasClass("first"))
  if( actualImage.hasClass("first") === true){
    actualImage.removeClass('active')
    $('.last').addClass('active')
  } else {
    actualImage.removeClass('active').prev().addClass('active')
  }
})

$('.next').click(function(){
  var actualImage=$('.active')
  console.log(actualImage)
  console.log(actualImage.attr("class"),typeof actualImage.attr("class"),actualImage.hasClass("last"))
  if( actualImage.hasClass("last") === true){
    actualImage.removeClass('active')
    $('.first').addClass('active')
  } else {
    actualImage.removeClass('active').next().addClass('active')
  }

})

$('.slider-wrapper').keypress(function(){
  console.log(e.which)
  if(e.which === 37){
    var actualImage=$('.active')
    console.log(actualImage)
    console.log(actualImage.attr("class"),typeof actualImage.attr("class"),actualImage.hasClass("first"))
    if( actualImage.hasClass("first") === true){
      actualImage.removeClass('active')
      $('.last').addClass('active')
    } else {
      actualImage.removeClass('active').prev().addClass('active')
    }
  }

  if(e.which === 39){
    var actualImage=$('.active')
    console.log(actualImage)
    console.log(actualImage.attr("class"),typeof actualImage.attr("class"),actualImage.hasClass("last"))
    if( actualImage.hasClass("last") === true){
      actualImage.removeClass('active')
      $('.first').addClass('active')
    } else {
      actualImage.removeClass('active').next().addClass('active')
    }
  }
})
