let navigation = document.querySelector('#navigation'),

    toggleExpandMenuButton = document.querySelector('.expand_menu_button'),
    navigationBottomBanner = document.querySelector('.navigation_bottom_banner'),
    parentMenuList = document.querySelector('.navigation_bottom_banner_parent_list'),
    expandMenuListIcon = document.querySelectorAll('.navigation_bottom_banner_parent_list_title span'),
    parentMenuListItem = document.querySelectorAll('.navigation_bottom_banner_parent_list li'),
    subMenus = document.querySelectorAll('.sub_menu'),

    searchBox = document.querySelector('#search_textbox'),
    searchTerm = document.querySelectorAll('.search_term'),
    searchResults = document.querySelector('.search_results'),

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


// ADD DARK BACKGROUND TO MENU WHEN SCROLLED
window.addEventListener('scroll', function(e) {
    let top = this.scrollY

    if(top !== 0 || checkCurrentNavWidth() <= 1100) {
        navigation.classList.add('opaque_bg')
    } else {
        if(navigation.classList.contains('opaque_bg')) {
            navigation.classList.remove('opaque_bg')
        }
    }
})


// ADD OPAQUE BACKGROUND WHEN SCREEN IS LESS THAN 1100PX
window.addEventListener('resize', function() {
    let Width = checkCurrentNavWidth()
    if(Width <= 1100) {
        navigation.classList.add('opaque_bg')
    } else {
        if(navigation.classList.contains('opaque_bg')) {
            navigation.classList.remove('opaque_bg')
        }
    }
})

// function to check width of the nav
function checkCurrentNavWidth() {
    let navWidth = document.getElementById("navigation").offsetWidth
    return navWidth;
}

// TOGGLE EXPAND MENU
toggleExpandMenuButton.addEventListener('click', function() {
    toggleExpandMenuButton.classList.toggle('close')
   parentMenuList.classList.toggle('reveal_parent_list')
})


// SHOW THE SUB MENU ITEMS WHE THE ICON IS CLICKED ( on small screens )
expandMenuListIcon.forEach((icon, index) => {
    icon.addEventListener('click', function() {
        if(checkCurrentNavWidth() <= 1100) {
            icon.classList.toggle('transform_icon')
            subMenus[index].classList.toggle('show_sub_menu')

            // remove position fixed on the navigation
            navigation.classList.toggle('remove_fixed')
        }
    })
})

// SHOW SUB MENU ITEMS ON MOUSEOVER ( on bigger screens )
parentMenuListItem.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        if(checkCurrentNavWidth() >= 1100) {
            item.classList.add('reveal_sub_menu')
        }
    })

    item.addEventListener('mouseleave', function() {
        if(item.classList.contains('reveal_sub_menu')){
            item.classList.remove('reveal_sub_menu')
        }
    })
})

// THE SEARCH FORM

function displaySearchResults() {
    if(searchBox.value !== '') {
        searchResults.style.display = 'flex'
    } else {
        searchResults.style.display = 'none'
    }
}

displaySearchResults()

searchBox.addEventListener('keyup', function(e) {
    displaySearchResults()

    searchTerm.forEach((span, index) => {
        span.innerText = e.target.value
    })
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

window.addEventListener('load', function() {
    let navWidth = document.getElementById("navigation").offsetWidth
    if(navWidth <= 1100) {
        navigation.classList.add('opaque_bg')
    } else {
        if(navigation.classList.contains('opaque_bg')) {
            navigation.classList.remove('opaque_bg')
        }
    }
    
    //set the width of the parent carousel container
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
    let parentX = productCardsContainers[0].getBoundingClientRect().right
    let childX = productsCarousel1.getBoundingClientRect().right

    if((childX + 50) < parentX) return

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
    let parentX = productCardsContainers[0].getBoundingClientRect().right
    let childX = productsCarousel2.getBoundingClientRect().right

    if((childX + 50) < parentX) return
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
    let parentX = productCardsContainers[0].getBoundingClientRect().right
    let childX = productsCarousel3.getBoundingClientRect().right

    if((childX + 50) < parentX) return

    startIndex3++
    productsCarousel3.style.transform = `translateX(${-startIndex3 * 250}px)`
    
})
