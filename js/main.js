$(document).ready(function(){

//menubalken

const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_main[href*="' + sectionId + '"]')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav_main[href*="' + sectionId + '"]')
        .classList.remove('active');
    }
  });
});

// scroller

var lastId,
 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight()-31,

 menuItems = topMenu.find("a"),

 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1200);
  e.preventDefault();
});

// slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
          clickable: true,
    // type: "progressbar",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//   $('.slider').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: true,
//   adaptiveHeight: true,
//   autoplay: true,
//   autoplaySpeed: 15000,
//   infinite: true
// });
});
//loader
function next2() {
  var notVisible = -1;
  $('.hidden-content').each(function() {
    if ($(this).css('display') !== 'none') {
      notVisible = notVisible + 1;
    }
  });
  $(".hidden-content:eq( " + (notVisible + 1) + " )").show();
  $(".hidden-content:eq( " + (notVisible + 2) + " )").show();
}
