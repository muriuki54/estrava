let navigation = document.querySelector('#navigation'),
    productCards = document.querySelectorAll('.products_on_sale_card'),
    carouselPreviousButton = document.querySelector('.previous_control'),
    carouselNextButton = document.querySelector('.next_control'),
    productsCarousel = document.querySelector('.product_on_sale_cards')

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

//set the width of the parent container

window.addEventListener('load', function() {
    productsCarousel.style.width = `${(productCards.length) * 250}px`
})

let startIndex = 0

carouselPreviousButton.addEventListener('click', function() {
    if(startIndex === 0) return
    startIndex--
    console.log(startIndex)
    productsCarousel.style.transform = `translateX(${startIndex * 250}px)`
})

carouselNextButton.addEventListener('click', function() {
    startIndex++
    console.log(startIndex)
    productsCarousel.style.transform = `translateX(${-startIndex * 250}px)`
})