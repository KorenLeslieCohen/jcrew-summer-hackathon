console.log("jcrew.js");

$(document).ready(function () {

  $('.products, #outfits, #women, #men').hide();

  // preloader
  // $('.preloader').delay(1500).fadeOut(750); 

  // separate women's and men's tops/bottoms into arrays
  var womenTopsArr = [],
    womenBottomsArr = [],
    menTopsArr = [],
    menBottomsArr = [];

  $('.product').each(function (){
    // console.log($(this).html().toString());
    if ( ($(this).html().toString().includes("womens_category/sweaters")) || ($(this).html().toString().includes("womens_category/knitstees")) || ($(this).html().toString().includes("womens_category/shirtsandtops2"))) {
      womenTopsArr.push($(this).html());
      return womenTopsArr;
    } else if (($(this).html().includes("womens_category/pants")) || ($(this).html().includes("womens_category/denim"))) {
      womenBottomsArr.push($(this).html());
      return womenBottomsArr;
    } else if (($(this).html().includes("mens_category/shirts")) || ($(this).html().includes("mens_category/sweaters")) || ($(this).html().includes("mens_category/teespolos2"))) {
      menTopsArr.push($(this).html());
      return menTopsArr;
    } else if (($(this).html().includes("mens_category/pants")) || ($(this).html().includes("mens_category/shorts"))) {
      menBottomsArr.push($(this).html());
      return menBottomsArr;
    }
  });

  // log array contents
  console.log("womenTopsArr outside: " + womenTopsArr);
  console.log("womenBottomsArr outside: " + womenBottomsArr);
  console.log("menTopsArr outside: " + menTopsArr);
  console.log("menBottomsArr outside: " + menBottomsArr);

  // click female to generate random women's outfit
  $('div').on('click', '.female', function() {
    $('#men').hide();
    $('#gender').hide();
    $('#outfits').show();
    $('#women').fadeIn(500);
    $('.women-tops').hide().html(womenTopsArr[Math.floor(Math.random() * womenTopsArr.length)]).show();
    $('.women-bottoms').hide().html(womenBottomsArr[Math.floor(Math.random() * womenBottomsArr.length)]).show();
  });

  // click male to generate random men's outfit
  $('div').on('click', '.male', function() {
    $('#women').hide();
    $('#gender').hide();
    $('#outfits').show();
    $('#men').fadeIn(500);
    $('.men-tops').hide().html(menTopsArr[Math.floor(Math.random() * menTopsArr.length)]).show();
    $('.men-bottoms').hide().html(menBottomsArr[Math.floor(Math.random() * menBottomsArr.length)]).show();
  });

  // click generate another to generate another random outfit
  $('div').on('click', '.another', function() {
    var self = $(this);
    if (self.closest('div[id]').html() === $('#women').html()) {
      $('.women-tops').hide().html(womenTopsArr[Math.floor(Math.random() * womenTopsArr.length)]).show();
      $('.women-bottoms').hide().html(womenBottomsArr[Math.floor(Math.random() * womenBottomsArr.length)]).show();
    } else if (self.closest('div[id]').html() === $('#men').html()) {
      $('.men-tops').hide().html(menTopsArr[Math.floor(Math.random() * menTopsArr.length)]).show();
      $('.men-bottoms').hide().html(menBottomsArr[Math.floor(Math.random() * menBottomsArr.length)]).show();
    } 
  });

});