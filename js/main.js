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
    closeSearchResults = document.querySelector('.close_search_results')


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

closeSearchResults.addEventListener('click', function() {
    searchBox.value = ''
    displaySearchResults()
})

// SHOW ADD_TO_FAVORITE ICON WHEN CARD IS HOVERED
/*
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
*/

