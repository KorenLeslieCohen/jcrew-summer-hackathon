console.log("jcrew.js");

$(document).ready(function () {

  // preloader
  $('.preloader').delay(2500).fadeOut(500); 

  var womenKnitArray = [],
    womenSweaterArray = [];

  $('.product').each(function (){
    var self = $(this),
      that = self.html();

    if (that.includes("sweater")) {
      womenSweaterArray.push(self.html());
      console.log("sweater");
      return womenSweaterArray;
    } else if (that.includes("knit")) {
      womenKnitArray.push(self.html());
      console.log("knit");
      return womenKnitArray;
    }
  });

  console.log("womenSweaterArray outside: " + womenSweaterArray);
  console.log("womenKnitArray outside: " + womenKnitArray);

});