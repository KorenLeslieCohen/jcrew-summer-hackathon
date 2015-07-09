console.log("jcrew.js");

$(document).ready(function () {

  // preloader
  $('.preloader').delay(2500).fadeOut(500); 

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
    } else if ((that.includes("womens_category/pants")) || (that.includes("womens_category/skirts")) || (that.includes("womens_category/denim"))) {
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

  console.log("womenTopsArr outside: " + womenTopsArr);
  console.log("womenBottomsArr outside: " + womenBottomsArr);
  console.log("menTopsArr outside: " + menTopsArr);
  console.log("menBottomsArr outside: " + menBottomsArr);

  $('.products').hide();

  $('.women-tops').append(womenTopsArr[Math.floor(Math.random() * womenTopsArr.length)]);

});