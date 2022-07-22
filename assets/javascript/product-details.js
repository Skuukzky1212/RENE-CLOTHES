 
 //-----size-guide modal------
 
// const closeSideModals = document.querySelectorAll('.side-modal__close-btn');
const sizeGuideModalBtn = document.querySelector('.variation__size-guide-text');
const openSizeGuideModal = document.querySelector('.size-guide__modal-overlay');
const sizeGuideModalContainer = document.querySelector('.size-guide__modal');
// const disableScroll = document.querySelector('body');

// open size-guide Modal
sizeGuideModalBtn.addEventListener('click', function() {
    openSizeGuideModal.classList.toggle('open');
    disableScroll.classList.toggle('disableScrolling');
});

// close size-guide Modal when click into overlay class
openSizeGuideModal.addEventListener('click', function() {
    openSizeGuideModal.classList.remove('open');
    disableScroll.classList.remove('disableScrolling');
});
 
// Stop Propagation when click into overlay class
sizeGuideModalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
});

// close btn
for (closeSideModal of closeSideModals) {
    closeSideModal.addEventListener('click', function() {
        openSizeGuideModal.classList.remove('open');
        disableScroll.classList.remove('disableScrolling');
    })
}

// slick slider 
$(document).ready(function(){
    $('.container__product-suggestions-img-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='ti-arrow-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='ti-arrow-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, 
                    infinite: false,
                    draggable: true,
                },
            },
        ],
    });
  });

  //fill/ empty icon - add to wishlist
 const addWishlistBtns = document.querySelectorAll('.variation__action ')
 for (let addWishlistBtn of addWishlistBtns) {
     addWishlistBtn.addEventListener('click', function() {
         if (addWishlistBtn.classList.contains('main-product-item__like--liked')) {
             addWishlistBtn.classList.remove('main-product-item__like--liked')

         }
         else {
             addWishlistBtn.classList.add('main-product-item__like--liked');
         }
     });
 }