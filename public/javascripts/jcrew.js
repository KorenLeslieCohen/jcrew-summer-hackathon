console.log("jcrew.js");
$(document).ready(function () {

  // preloader
  $('.preloader').delay(2500).fadeOut(500); 
  console.log("inside jcrew.js");

  var productArray = [];
  console.log("one");

  $('.product').each(function (){
    var self = $(this);
      // productArray = [];
    productArray.push(self.html());
    // console.log("self inside: " + self.html());
    console.log("productArray inside: " + productArray);
    return productArray;
    console.log("two");
  });

  console.log("productArray outside: " + productArray);
  console.log("three");


});