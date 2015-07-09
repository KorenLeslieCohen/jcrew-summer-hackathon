console.log("jcrew.js");

$(document).ready(function () {

  $('.products, #women, #men').hide();

  // preloader
  $('.preloader').delay(1500).fadeOut(750); 

  // separate women's and men's tops/bottoms into arrays
  var womenTopsArr = [],
    womenBottomsArr = [],
    menTopsArr = [],
    menBottomsArr = [];

  $('.product').each(function (){
    var self = $(this),
      that = self.html();
    if ((that.includes("womens_category/sweaters")) || (that.includes("womens_category/knitstees")) || (that.includes("womens_category/shirtsandtops2"))) {
      womenTopsArr.push(that);
      return womenTopsArr;
    } else if ((that.includes("womens_category/pants")) || (that.includes("womens_category/denim"))) {
      womenBottomsArr.push(that);
      return womenBottomsArr;
    } else if ((that.includes("mens_category/shirts")) || (that.includes("mens_category/sweaters")) || (that.includes("mens_category/teespolos2"))) {
      menTopsArr.push(that);
      return menTopsArr;
    } else if ((that.includes("mens_category/pants")) || (that.includes("mens_category/shorts"))) {
      menBottomsArr.push(that);
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
    $('#women').fadeIn(500);
    $('.women-tops').hide().html(womenTopsArr[Math.floor(Math.random() * womenTopsArr.length)]).fadeIn(500);
    $('.women-bottoms').hide().html(womenBottomsArr[Math.floor(Math.random() * womenBottomsArr.length)]).fadeIn(500);
  });

  // click male to generate random men's outfit
  $('div').on('click', '.male', function() {
    $('#women').hide();
    $('#gender').hide();
    $('#men').fadeIn(750);
    $('.men-tops').hide().html(menTopsArr[Math.floor(Math.random() * menTopsArr.length)]).fadeIn(750);
    $('.men-bottoms').hide().html(menBottomsArr[Math.floor(Math.random() * menBottomsArr.length)]).fadeIn(750);
  });

  // click generate another to generate another random outfit
  $('div').on('click', '.another', function() {
    var self = $(this);
    if (self.closest('div[id]').html() === $('#women').html()) {
      $('.women-tops').hide().html(womenTopsArr[Math.floor(Math.random() * womenTopsArr.length)]).fadeIn(750);
      $('.women-bottoms').hide().html(womenBottomsArr[Math.floor(Math.random() * womenBottomsArr.length)]).fadeIn(750);
    } else if (self.closest('div[id]').html() === $('#men').html()) {
      $('.men-tops').hide().html(menTopsArr[Math.floor(Math.random() * menTopsArr.length)]).fadeIn(750);
      $('.men-bottoms').hide().html(menBottomsArr[Math.floor(Math.random() * menBottomsArr.length)]).fadeIn(750);
    } 
  });

});