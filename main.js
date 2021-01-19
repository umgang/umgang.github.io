const checkpoint = 790;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = "none";
  }
  if (currentScroll > checkpoint) {
    opacity = "black";
  }
  document.querySelector(".bg-custom").style.background = opacity;
});
$(function () {
    'use strict';
    var view = $(window).height();
    $('.part')
        .height(view)
        .scrollie({
            scrollOffset: -45,
            scrollingInView: function (elem) {
                var bg = elem.data('background');
                $('body').css('background-color', bg);
            }
        });
});

var slideLeft = {
    distance: '30%',
    origin: 'left',
    opacity: null
};
var slideRight = {
    distance: '30%',
    origin: 'right',
    opacity: null
};


ScrollReveal().reveal('#ab-fade-r',{duration: 2000});
ScrollReveal().reveal('#ab-fade-l',{duration: 2000});
ScrollReveal().reveal('#ab-fade-t',{duration: 1000});

ScrollReveal().reveal('#cp-fade-df',{duration: 1000});
ScrollReveal().reveal('#cp-fade-1',{duration: 1000});
ScrollReveal().reveal('#cp-fade-2',{duration: 2000});
ScrollReveal().reveal('#cp-fade-3',{duration: 4000});
ScrollReveal().reveal('#cp-fade-4',{duration: 6000});

ScrollReveal().reveal('#pr-fade-l',{duration: 2000});
ScrollReveal().reveal('#pr-fade-r',{duration: 2000});
ScrollReveal().reveal('#pr-fade-t',{duration: 2000});