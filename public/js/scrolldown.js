$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('#btnfoot').hide();
     }
     else {
         $('#btnfoot').show();
     }
});
