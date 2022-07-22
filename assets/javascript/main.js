
// show and hide header navbar when scroll
document.addEventListener("DOMContentLoaded", function() {
    const el_autohide = document.querySelector('.autohide');
// add padding-top to body (if necessary)
    let navbar_height = document.querySelector('.header__category').offsetHeight;
document.body.style.paddingTop = navbar_height + 'px';

if(el_autohide) {
    let last_scroll_top = 0;
    window.addEventListener('scroll', function() {
        let scroll_top = window.scrollY;
        // if(scroll_top === 0)
        if(scroll_top === 0) {
            setTimeout(function() {
                el_autohide.classList.remove('scrolled-down');
            }, 200);
            el_autohide.classList.add('scrolled-up');     
        }else {
            setTimeout(function() {
                el_autohide.classList.add('scrolled-down');
            }, 200); 
            el_autohide.classList.remove('scrolled-up');
        }
        last_scroll_top = scroll_top;
    });
    }
}); 

   // ----category list modal----
// category list
const openCates = document.querySelectorAll('.js-category-item-active');
const cateModal = document.querySelector('.category__modal-overlay');
const cateModalWrap = document.querySelector('.header__category-list-modal');
const closeCateModalBtn = document.querySelector('.js-modal-close-btn');
const disableScroll = document.querySelector('body');
const resetCateActive = document.getElementsByClassName('header__category-list-item');
const activeCateLv1Items = document.querySelectorAll('.js-category-cateLv1-active');

// mobile category
const openMobileCate = document.getElementById('hamburger-menu-check');
const mobileCate = document.querySelector('.header__category-mobile');
const cateLv1 = document.querySelector('.header__category-list.header__category-list-mobile-lv1');
const cateLv1Items = document.querySelectorAll('.js-open-cate-lv1-list');
const cateLv2 = document.querySelector('.header__category-list.header__category-list-mobile-lv2');
const closeCateLv1 = document.querySelector('.header__category-list-mobile-lv1-title-icon');
const closeCateLv2 = document.querySelector('.header__category-list-mobile-lv2-title-icon');

// active category item
for (const activeCateLv1Item of activeCateLv1Items ) {
    activeCateLv1Item.addEventListener('click', function() { 
        let currentItem = document.getElementsByClassName("Lv1-active");
            for (let i = 0; i < currentItem.length; i++) {
                currentItem[0].className = currentItem[0].className.replace(" Lv1-active", "");
            }         
            this.className += " Lv1-active";
    });
}
// open/close when click category items
for (const openCate of openCates ) {
    openCate.addEventListener('click', function() {
        if (openCate.classList.contains('active')) {
            for (const activeCateLv1Item of activeCateLv1Items ) {
                activeCateLv1Item.classList.remove('Lv1-active');
            }
            cateModal.classList.remove('open');
            cateModalWrap.classList.remove('action');
            disableScroll.classList.remove('disableScrolling');
            openCate.classList.remove('active');
        } else if (openCate.classList.contains('active') == false) {
            cateModal.classList.add('open');
            cateModalWrap.classList.add('action');
            disableScroll.classList.add('disableScrolling');  
            let current = document.getElementsByClassName("active");
            for (let i = 0; i < current.length; i++) {
                current[0].className = current[0].className.replace(" active", "");
            }         
            this.className += " active";
        } 
        disableScroll.classList.toggle('disableScrolling');
    });
}

// open mobile cate 
for (const openCate of openCates) {
    openCate.addEventListener('click', function() {
        cateLv1.classList.toggle('open'); //open cateLv1 in mobile     
        disableScroll.classList.toggle('disableScrolling');
    });
};
openMobileCate.addEventListener('click', function() {
    if (openMobileCate.checked == true) {
        mobileCate.classList.add('open');
        disableScroll.classList.add('disableScrolling');
    } else {
        mobileCate.classList.remove('open');
        cateLv1.classList.remove('open'); 
        cateLv2.classList.remove('open');    
        disableScroll.classList.remove('disableScrolling');
    }
})

// open cateLv2 in mobile
for (const lv1 of cateLv1Items ) {
    lv1.addEventListener('click', function() {
        cateLv2.classList.toggle('open');
        disableScroll.classList.add('disableScrolling');
    })
}

// close cateLv1 in mobile
closeCateLv1.addEventListener('click', function() {
    cateLv1.classList.remove('open'); 
    disableScroll.classList.remove('disableScrolling');

})

// close cateLv2 in mobile
closeCateLv2.addEventListener('click', function() {
    cateLv2.classList.remove('open'); 
    disableScroll.classList.remove('disableScrolling');

})

// close when click close button of category
closeCateModalBtn.addEventListener('click', function() {
    let list_header = document.getElementsByClassName('active');
    for (const item of list_header) {
        item.classList.remove('active');
    }
    for (const activeCateLv1Item of activeCateLv1Items ) {
        activeCateLv1Item.classList.remove('Lv1-active');
    }
    cateModal.classList.remove('open');
    cateModalWrap.classList.remove('action');
    disableScroll.classList.remove('disableScrolling'); 
});

    // ----Login modal----
// open/close login modal 
const loginModalBtn = document.querySelector('.header__navbar-option-user-icon');
const openLoginModal = document.querySelector('.login__modal-overlay'); 
const closeSideModals = document.querySelectorAll('.side-modal__close-btn');
const loginModal = document.querySelector('.login__modal');
const loginModalContainer = document.querySelector('.login__modal-container-form');
const forgotPwdBtn = document.querySelector('.container__log-in-forget-pwd');
const forgotPwdModal = document.querySelector('.login__modal-container-forgot-password');
const closeForgotPwdModal = document.querySelector('.container__log-in-forget-pwd-back-to-login');

// open Login Modal
loginModalBtn.addEventListener('click', function() {
    openLoginModal.classList.add('open');
    disableScroll.classList.toggle('disableScrolling');
});

// close all side Modal by close button
for (const closeSideModal of closeSideModals) {
    closeSideModal.addEventListener('click', function() {
        openLoginModal.classList.remove('open');
        openWishListModal.classList.remove('open');
        openBasketModal.classList.remove('open');
        disableScroll.classList.remove('disableScrolling');
    })
}

// close Login Modal when click into overlay class
openLoginModal.addEventListener('click', function() {
    openLoginModal.classList.remove('open');
    disableScroll.classList.remove('disableScrolling')
});
 
// Stop Propagation when click into overlay class
loginModal.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Swap to forgot password form
forgotPwdBtn.addEventListener('click', function() {
    loginModalContainer.classList.add('hide');
    forgotPwdModal.classList.add('open');
});

// Swap to login form 
closeForgotPwdModal.addEventListener('click', function() {
    forgotPwdModal.classList.remove('open')
    loginModalContainer.classList.remove('hide');

});

    //----wishlist modal---- 
const wishlistModalBtn = document.querySelector('.header__navbar-option-wishlist');
const openWishListModal = document.querySelector('.wishlist__modal-overlay');
const wishListModalContainer = document.querySelector('.wishlist__modal');

// open Wishlist Modal 
wishlistModalBtn.addEventListener('click', function() {
    openWishListModal.classList.toggle('open');
    disableScroll.classList.toggle('disableScrolling')
});

// close wishlist Modal when click into overlay class
openWishListModal.addEventListener('click', function() {
    openWishListModal.classList.remove('open');
    disableScroll.classList.remove('disableScrolling')
});
 
// Stop Propagation when click into overlay class
wishListModalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
});

    //-----Basket modal-----
const basketModalBtn = document.querySelector('.header__navbar-option-basket');
const openBasketModal = document.querySelector('.basket__modal-overlay');
const basketModalContainer = document.querySelector('.basket__modal');

// open Basket Modal 
basketModalBtn.addEventListener('click', function() {
    openBasketModal.classList.toggle('open');
    disableScroll.classList.toggle('disableScrolling')
});

// close Basket Modal when click into overlay class
openBasketModal.addEventListener('click', function() {
    openBasketModal.classList.remove('open');
    disableScroll.classList.remove('disableScrolling')
});
 
// Stop Propagation when click into overlay class
basketModalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
});

//     //-----Quantity Input-----
// function increaseValue() {
//     let value = parseInt(document.querySelector('.quantity-input-value').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.querySelector('.quantity-input-value').value = value;
// }
  
// function decreaseValue() {
//     let value = parseInt(document.querySelector('.quantity-input-value').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.querySelector('.quantity-input-value').value = value;
// }

const incrementBtn = document.getElementsByClassName('quantity-input-button-increase');
const decrementBtn = document.getElementsByClassName('quantity-input-button-decrease');

// Increment
for (let i = 0; i < incrementBtn.length; i++) {
    let button = incrementBtn[i];
    let de_button = decrementBtn[i];
    button.addEventListener('click', function (e) {
        let buttonClicked = e.target;
        // console.log(buttonClicked);
        let input =  buttonClicked.parentElement.children[1];
        // console.log(input)
        let inputValue = input.value;
        // console.log(inputValue)
        let newValue = parseInt(inputValue) + 1;
        // console.log(newValue)
        input.value = newValue;
        de_button.style.cursor = "pointer";
    })
}
// Decrement
for (let i = 0; i < decrementBtn.length; i++) {
    let button = decrementBtn[i];
    button.style.cursor = "default";
    button.addEventListener('click', function (e) {
        let buttonClicked = e.target;
        // console.log(buttonClicked);
        let input =  buttonClicked.parentElement.children[1];
        // console.log(input)
        let inputValue = input.value;
        // console.log(inputValue)
        let newValue = parseInt(inputValue) - 1;
        // console.log(newValue)
        if (inputValue == 2) {
            button.style.cursor = "default";
        } 
        if (newValue >= 1) {
            input.value = newValue;
        } 
    })
}

// choose size in wishlist modal
 const sizeList = document.querySelectorAll('.wishlist__modal-product-size-item');

 for (let sizeitem of sizeList) {
     sizeitem.addEventListener('click', function() {
         let currentSize = document.getElementsByClassName("wishlist__modal-product-size-item-active");
            for (let i = 0; i < currentSize.length; i++) {
                currentSize[0].className = currentSize[0].className.replace(" wishlist__modal-product-size-item-active", "");
            }         
            this.className += " wishlist__modal-product-size-item-active";
    });
 }

 
