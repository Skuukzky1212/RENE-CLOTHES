//-----Filter modal-----
    const filterModalBtn = document.querySelector('.container__filter');
    const openFilterModal = document.querySelector('.filter__modal-overlay');
    const filterModalContainer = document.querySelector('.filter__modal');
   
   // open filter Modal 
   filterModalBtn.addEventListener('click', function() {
       openFilterModal.classList.toggle('open');
       disableScroll.classList.toggle('disableScrolling');
   });
   
   // close filter Modal when click into overlay class
   openFilterModal.addEventListener('click', function() {
       openFilterModal.classList.remove('open');
       disableScroll.classList.remove('disableScrolling');
   });
    
   // Stop Propagation when click into overlay class
   filterModalContainer.addEventListener('click', function(e) {
       e.stopPropagation();
   });

// close btn
for ( closeSideModal of closeSideModals) {
    closeSideModal.addEventListener('click', function() {
        openFilterModal.classList.remove('open');
        disableScroll.classList.remove('disableScrolling');
    })
}

// fill icon - add to wishlist
const addWishlistBtns = document.querySelectorAll('.main-product-item__action')
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

//Fetch data from json-server 

fetch("../backend/db.json")
    .then(function (res) {
        if (!res.ok) {
            throw Error("ERROR");
        }
        return res.json();
    })
    .then(function(data){
        const html = data.products.map((product)=> {
            return (
                `<ul class="col l-3 m-4 c-12">
                    <li class="main-product-item">
                        <a href="#" class="main-product-item-link">
                            <div class="main-product-item__img"
                                style="background-image: 
                                    url(${product.image})">
                            </div>

                            <!-- home-product-item__status-box show new season or sale off item -->
                            <div class="main-product-item__status-box">
                                <span class="main-product-item__status-box-text">NEW SEASON</span>
                            </div>

                            <h4 class="main-product-item__name">
                                ${product.name}
                            </h4>

                            <!-- add class main-product-item__price-sale to add old price -->
                            <div class="main-product-item__price">
                                <span class="main-product-item__price-current">${product.price} <p>&#8363;</p></span>
                                <span class="main-product-item__price-old">
                                    <p>&#8363;</p>
                                </span>
                            </div>

                        </a>
                        <button class="main-product-item__action">
                            <!-- add class 'main-product-item__like--liked' to fill/em heart icon -->
                            <span class="main-product-item__like">
                                <i class="main-product-item__like-icon-empty bx bx-heart"></i>
                                <i class="main-product-item__like-icon-fill bx bxs-heart"></i>
                            </span>
                        </button>
                    </li>
                </ul>`
            )
        }).join('');
        document.querySelector('.container__product-wrap').insertAdjacentHTML("afterbegin",html);
    
    })
    .catch(function(error){
        console.log(error);
    });






