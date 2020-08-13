let navigation = document.querySelector('#navigation'),

    productCards = document.querySelectorAll('.product_on_sale_cards'),
    productCards1 = document.querySelectorAll('.product_on_sale_cards_1 .products_on_sale_card'),
    productCards2 = document.querySelectorAll('.product_on_sale_cards_2 .products_on_sale_card'),
    productCards3 = document.querySelectorAll('.product_on_sale_cards_3 .products_on_sale_card'),

    carouselPreviousButton1 = document.querySelector('.carousel_1_previous_control'),
    carouselNextButton1 = document.querySelector('.carousel_1_next_control'),

    carouselPreviousButton2 = document.querySelector('.carousel_2_previous_control'),
    carouselNextButton2 = document.querySelector('.carousel_2_next_control'),

    carouselPreviousButton3 = document.querySelector('.carousel_3_previous_control'),
    carouselNextButton3 = document.querySelector('.carousel_3_next_control'),

    productsCarousel1 = document.querySelector('.product_on_sale_cards_1'),
    productsCarousel2 = document.querySelector('.product_on_sale_cards_2'),
    productsCarousel3 = document.querySelector('.product_on_sale_cards_3')


// ADD DARK BACKGROUND TO MENU WHEN SCROLLED
window.addEventListener('scroll', function(e) {
    let top = this.scrollY

    if(top !== 0) {
        navigation.classList.add('opaque_bg')
    } else {
        if(navigation.classList.contains('opaque_bg')) {
            navigation.classList.remove('opaque_bg')
        }
    }
})

// SHOW ADD_TO_FAVORITE ICON WHEN CARD IS HOVERED
productCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        card.classList.add('focused')
    })

    card.addEventListener('mouseleave', function() {
        if(card.classList.contains('focused')) {
            card.classList.remove('focused')
        }
    })
})

// TRANSLATE THE CAROUSEL ON THE X AXIS

//set the width of the parent carousel container
window.addEventListener('load', function() {
    productsCarousel1.style.width = `${(productCards1.length) * 250}px`
    productsCarousel2.style.width = `${(productCards2.length) * 250}px`
    productsCarousel3.style.width = `${(productCards3.length) * 250}px`
})

// start here ( add + 1 if clicking next, subtract - 1 to go go back)
let startIndex1 = 0,
    startIndex2 = 0,
    startIndex3 = 0

// carousel 1
carouselPreviousButton1.addEventListener('click', function() {
    if(startIndex1 === 0) return
    startIndex1--
    productsCarousel1.style.transform = `translateX(${-startIndex1 * 250}px)`
})

carouselNextButton1.addEventListener('click', function() {
    startIndex1++
    productsCarousel1.style.transform = `translateX(${-startIndex1 * 250}px)`
})

// carousel 2
carouselPreviousButton2.addEventListener('click', function() {
    if(startIndex2 === 0) return
    startIndex2--
    productsCarousel2.style.transform = `translateX(${-startIndex2 * 250}px)`
})

carouselNextButton2.addEventListener('click', function() {
    startIndex2++
    productsCarousel2.style.transform = `translateX(${-startIndex2 * 250}px)`
})

// carousel 3
carouselPreviousButton3.addEventListener('click', function() {
    if(startIndex3 === 0) return
    startIndex3--
    productsCarousel3.style.transform = `translateX(${-startIndex3 * 250}px)`
})

carouselNextButton3.addEventListener('click', function() {
    startIndex3++
    productsCarousel3.style.transform = `translateX(${-startIndex3 * 250}px)`
})
