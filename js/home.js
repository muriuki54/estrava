let heroSection = document.querySelector('#hero_section'),

    productCards = document.querySelectorAll('.products_on_sale_card'),

    productCardsContainers = document.querySelectorAll('#home_products_on_sale'),
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

// TRANSLATE THE CAROUSEL ON THE X AXIS

//window.addEventListener('load', function() {
    let navWidth = document.getElementById("navigation").offsetWidth
    let navHeight = navigation.offsetHeight

    // hero section margin top ??? not sure whats happening here myself -15px ?? wtf
    // if i don't add this 15px tho, there is a gap on top of the hero-section slider
    heroSection.style.marginTop = `${-navHeight - 15}px`

    if(navWidth <= 1100) {
        navigation.classList.add('opaque_bg')
    } else {
        if(navigation.classList.contains('opaque_bg')) {
            navigation.classList.remove('opaque_bg')
        }
    }
    
    //set the width of the parent carousel container
    // 250 is the size of each product card
    productsCarousel1.style.width = `${(productCards1.length) * 250}px`
    productsCarousel2.style.width = `${(productCards2.length) * 250}px`
    productsCarousel3.style.width = `${(productCards3.length) * 250}px`
//})

window.addEventListener('resize', function( ){
    if(checkCurrentNavWidth() <= 1100) {
        heroSection.style.marginTop = `0px`
    } else {
        heroSection.style.marginTop = `${-navHeight - 15}px`
    }
})

// start here ( add + 1 if clicking next, subtract - 1 to go go back)
let startIndex1 = 0,
    startIndex2 = 0,
    startIndex3 = 0

// carousel 1
carouselPreviousButton1.addEventListener('click', function() {
    if(startIndex1 === 0) return
    startIndex1--
    // productsCarousel1.style.transform = `translateX(${-startIndex1 * 250}px)`
    translateCarousel(productsCarousel1, startIndex1)
})

carouselNextButton1.addEventListener('click', function() {
    let parentX = productCardsContainers[0].getBoundingClientRect().right
    let childX = productsCarousel1.getBoundingClientRect().right

    // 100px for the paddings
    if((childX + 100) < parentX) return

    startIndex1++
    // productsCarousel1.style.transform = `translateX(${-startIndex1 * 250}px)`
    translateCarousel(productsCarousel1, startIndex1)
    
})

// carousel 2
carouselPreviousButton2.addEventListener('click', function() {
    if(startIndex2 === 0) return
    startIndex2--
    // productsCarousel2.style.transform = `translateX(${-startIndex2 * 250}px)`
    translateCarousel(productsCarousel2, startIndex2)

})

carouselNextButton2.addEventListener('click', function() {
    let parentX = productCardsContainers[0].getBoundingClientRect().right
    let childX = productsCarousel2.getBoundingClientRect().right

    // 100px for the paddings
    if((childX + 100) < parentX) return
    startIndex2++
    // productsCarousel2.style.transform = `translateX(${-startIndex2 * 250}px)`
    translateCarousel(productsCarousel2, startIndex2)

})

// carousel 3
carouselPreviousButton3.addEventListener('click', function() {
    if(startIndex3 === 0) return
    startIndex3--
    // productsCarousel3.style.transform = `translateX(${-startIndex3 * 250}px)`
    translateCarousel(productsCarousel3, startIndex3)
})

carouselNextButton3.addEventListener('click', function() {
    let parentX = productCardsContainers[0].getBoundingClientRect().right
    let childX = productsCarousel3.getBoundingClientRect().right

    // 100px for the paddings
    if((childX + 100) < parentX) return

    startIndex3++
    //productsCarousel3.style.transform = `translateX(${-startIndex3 * 250}px)`
    translateCarousel(productsCarousel3, startIndex3)
})

// function to translate the carousel 
// takes the current carousel and its startIndex as args
function translateCarousel(carousel, startIndex) {
    carousel.style.transform = `translateX(${-startIndex * 250}px)`
}