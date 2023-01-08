// $(function () {
//   $(".").slick({
//     arrows: true,
//     dots: false,
//     slidesToShow: 4,
//     slidestoScroll: 1,
//     nextArrow:
//       '<button class="slick-arrow slick-prev"><img src="images/slider/arrow-next.svg" alt=""></button>',
//     prevArrow:
//       '<button class="slick-arrow slick-next"><img src="images/slider/arrow-prew.svg" alt=""></button>'
//   });
// });
var chance = $(".chance");

function runIt() {
  chance
    .show("slow")
    .animate({ left: "+=400" }, 4000)
    .slideToggle(2000)
    .slideToggle("fast")
    .animate({ left: "-=400" }, 2500)
    .hide("slow")
    .show("slow")
    .slideUp("normal", runIt);
}

runIt();
document.querySelector('.start-arrow__vavada ').addEventListener('click', start);
const inside = document.querySelector('.inside__vavada');

function start() {
  inside.classList.add('variant-1');
  setTimeout(function () {
   
    inside.classList.remove('variant-1');
  }, 4000);
}