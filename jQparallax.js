const $topBackground = $('.top'); //Select element with background you want to parallax

jQuery(window).scroll(function() { //When the user scrolls
  if($topBackground.visible(true)) { //If the element is in the viewport
    let parallaxMovement = -200 + (jQuery(document).scrollTop() - $topBackground.offset().top) / 2; //Generate amount to modify the background position
    if ($(window).width() < 1224) { //If there's white space on smaller screens, adjust media query to when it happens, then asjust the parallax offset
      parallaxMovement = 0 + (jQuery(document).scrollTop() - $topBackground.offset().top) / 2;
    }
    parallaxMovement += "px";
    $topBackground.css({'background-position': 'center ' + parallaxMovement});
  }
});

//On line 5 the (-200) is the parallax offset. Play with this number until you get a smooth background scroll start
//On line 5 the (2) at the end can be increased to decrease how fast the parallax is. Changing it to 1 would make it have a fixed background (essentially).

//Feel free to reach out with any questions ghughes139@gmail.com
