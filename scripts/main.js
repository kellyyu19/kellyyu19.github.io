$(document).ready(function () {

  /*! Fades in page on load */
  $('body').css('display', 'none');
  $('body').fadeIn(800);


});

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});