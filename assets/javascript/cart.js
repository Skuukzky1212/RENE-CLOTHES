const removeCartItemBtn = document.getElementsByClassName('js-remove-product-item');
for (let i = 0; i < removeCartItemBtn.length; i++ ) {
    let button = removeCartItemBtn[i];
    button.addEventListener('click', function(removeItem) {
        let buttonClicked = removeItem.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    
    })
}

// function updateCartTotal() {
//     let cartItemContainer = document.getElementsByClassName('container__cart-page-item-wap')[0];
//     let cartRows = cartItemContainer.getElementsByClassName('container__cart-page-item');
//     for (let i = 0; i < cartRows.length; i++) {
//         let cartRow = cartRows[i];
//         let priceElement = cartRow.getElementsByClassName('container__cart-page-product-price-amount')[0];
//         let quantityElement = cartRow.getElementsByClassName('quantity-input-value')[0];
//         let price = parseFloat(priceElement.innerText.replace('&#8363;', ''));
//         let quantity = quantityElement.value;
//         console.log(priceElement)
//     }
// }