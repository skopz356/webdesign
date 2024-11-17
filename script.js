const NAVIGATION_ACTIVE_CLASS = 'Navigation-mobileOpened'

document.addEventListener('DOMContentLoaded', () => {
    /*document.querySelector('.Navigation__hamburger').addEventListener('click', () => {
        const navigation = document.querySelector('.Navigation')
        if(navigation.classList.contains(NAVIGATION_ACTIVE_CLASS)) {
            navigation.classList.remove(NAVIGATION_ACTIVE_CLASS)
        }else {ě
            navigation.classList.add(NAVIGATION_ACTIVE_CLASS)
        }
    })*/

    const pizzaSelect = document.getElementById("pizza");
    const pizzaImage = document.getElementById("pizza-image");

    const pizzaImages  = {
        margherita: "../images/pizzas/margarita.jpg",
        pepperoni: "../images/pizzas/peperoni.jpg",
        hawaii: "../images/pizzas/hawai.jpg",
        vegetariana: "../images/pizzas/veg.webp",
        "quattro-formaggi": "../images/pizzas/for.jpg",
    };

// Funkce pro zobrazení obrázku
    pizzaSelect.addEventListener("change", () => {
        const selectedPizza = pizzaSelect.value;
        if (pizzaImages[selectedPizza]) {
            pizzaImage.src = pizzaImages[selectedPizza];
            pizzaImage.style.display = "block";
        } else {
            pizzaImage.style.display = "none";
        }
    });
})
