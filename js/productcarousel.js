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