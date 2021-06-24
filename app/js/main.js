
const mobile = document.getElementById('mobile-menu')
mobile.addEventListener('click', function(){

    const header = document.querySelector('.header')
    const overlay = header.children[0]

    if (this.nextElementSibling.style.display == 'block') {
        this.nextElementSibling.style.display = 'none'
    } else {
        this.nextElementSibling.style.display = 'block'
    }

    header.classList.toggle('active')
})

const overlay = document.querySelector('.overlay')
overlay.addEventListener('click', function(){
    
    const header = document.querySelector('.header')
    const menu = document.querySelector('.header__links')

    header.classList.remove('active')
    menu.style.display = 'none'
})


// Create a condition that targets viewports at least 1024px wide
const mediaQuery = window.matchMedia('(min-width: 1024px)')

function handleTabletChange(media) {
  // Check if the media query is true

    const menu = document.querySelector('.header__links')
    const header = document.querySelector('.header')
    const overlay = document.querySelector('.overlay')

    if (media.matches) {
        // Then log the following message to the console
        console.log('Media Query Matched!')

        header.classList.remove('active')
        menu.style.display = 'block'

    } else {

        menu.style.display = 'none'
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)


