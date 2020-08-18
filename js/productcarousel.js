let parentProductCarouselContainer = document.querySelector('.product_description_images'),
    productCarouselContainer = document.querySelector('.product_images_carousel'),
    productImages = document.querySelectorAll('.product_images_carousel img'),
    productThumbnails = document.querySelectorAll('.product_thumbnails_carousel img'),
    previousCarouselControl = document.querySelector('.product_previous_control'),
    nextCarouselControl = document.querySelector('.product_next_control'),

    startIndex = 0


// set each productImage width to the width of its parentContainer
// on page load and when the window is resized
setSizes()
window.addEventListener('resize', setSizes)

function setSizes() {
    
    productImages.forEach((image, index) => {
        image.style.minWidth = `${parentProductCarouselContainer.clientWidth}px`
    })
}

// HANDLE PREVIOUS AND NEXT CONTROLS
previousCarouselControl.addEventListener('click', function() {
    // check if we are at the start of the carousel (startIndex)
    if(startIndex === 0) return
    startIndex--

    translateX(startIndex)
})

nextCarouselControl.addEventListener('click', function() {
    // check if we are at the end of the carousel - using the length of the images
    if(startIndex === productImages.length - 1) return
    startIndex++
    translateX(startIndex)
}) 

productThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        startIndex = index
        translateX(startIndex)
    })
})

// this handles all the translatingX for previous and next buttons
function translateX(index) {
    productCarouselContainer.style.transform = `translateX(${-parentProductCarouselContainer.clientWidth * index}px)`
    thumbnailOpacity(index)
}

// set thumbnail opacity ( current thumbnail get a class current_thumbnail { opacity: 0.6 } in style.css)
function thumbnailOpacity(startIndex) {
    productThumbnails.forEach(thumbnail => {
        if(thumbnail.classList.contains('current_thumbnail')){
            thumbnail.classList.remove('current_thumbnail')
        }
    })
    productThumbnails[startIndex].classList.add('current_thumbnail')
}

thumbnailOpacity(startIndex)


//////////////////////////////////////////////////////////////////////////////
// RELATED PRODUCTS CAROUSEL
// carousel 3

let relatedProductsCarouselPreviousButton = document.querySelector('.related_products_carousel_previous_button')
let relatedProductsCarouselNextButton = document.querySelector('.related_products_carousel_next_button')
let parentContainer = document.querySelector('.related_products')
let childContainer = document.querySelector('.product_on_sale_cards')
let cards = document.querySelectorAll('.products_on_sale_card')

//set the width of the parent carousel container
// 250 is the size of each product card
childContainer.style.width = `${(cards.length) * 250}px`

relatedProductsCarouselPreviousButton.addEventListener('click', function() {
    if(startIndex === 0) return
    startIndex--
    // productsCarousel3.style.transform = `translateX(${-startIndex3 * 250}px)`
    translateCarousel(childContainer, startIndex)
})

relatedProductsCarouselNextButton.addEventListener('click', function() {
    let parentX = parentContainer.getBoundingClientRect().right
    let childX = childContainer.getBoundingClientRect().right
    console.log(parentX)
    console.log(childX)

    if((childX + 100) < parentX) return

    startIndex++
    //productsCarousel3.style.transform = `translateX(${-startIndex3 * 250}px)`
    translateCarousel(childContainer, startIndex)
})

// function to translate the carousel 
// takes the current carousel and its startIndex as args
function translateCarousel(carousel, startIndex) {
    carousel.style.transform = `translateX(${-startIndex * 250}px)`
}