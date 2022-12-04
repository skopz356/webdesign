const NAVIGATION_ACTIVE_CLASS = 'Navigation-mobileOpened'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.Navigation__hamburger').addEventListener('click', () => {
        const navigation = document.querySelector('.Navigation')
        if(navigation.classList.contains(NAVIGATION_ACTIVE_CLASS)) {
            navigation.classList.remove(NAVIGATION_ACTIVE_CLASS)
        }else {
            navigation.classList.add(NAVIGATION_ACTIVE_CLASS)
        }
    })
})
