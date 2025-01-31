 /* -----------------------------------------------------------------------------------------------------------
 * E-SHOP
 * ---------------------------------------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupPrice = document.getElementById('popup-price');
    const closePopup = document.querySelector('.close-popup');

    // Kliknutie na produkt
    document.querySelectorAll('.product-item').forEach(product => {
        product.addEventListener('click', () => {
            const name = product.getAttribute('data-name');
            const description = product.getAttribute('data-description');
            const price = product.getAttribute('data-price');
            const imgSrc = product.querySelector('img').src;

            popupImg.src = imgSrc;
            popupTitle.textContent = name;
            popupDescription.textContent = description;
            popupPrice.textContent = `Cena: ${price}`;

            popup.classList.add('show');
        });
    });

    // Zatvorenie popupu
    closePopup.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    // Zatvorenie popupu kliknutím mimo obsahu
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});
 /* -----------------------------------------------------------------------------------------------------------
 * E-SHOP-koniec
 * ---------------------------------------------------------------------------------------------------------- */

 /* -----------------------------------------------------------------------------------------------------------
 * Formualar
 * ---------------------------------------------------------------------------------------------------------- */
 // Funkcia na validáciu emailovej adresy
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Skontrolujeme, či email zodpovedá formátu
    if (!emailPattern.test(email)) {
        // Zobrazí alert správu, ak email nie je platný
        alert("Prosím, zadajte platnú emailovú adresu.");
        return false; // Zastaví odoslanie formulára
    }
    return true; // Email je validný, formulár môže byť odoslaný

     /* -----------------------------------------------------------------------------------------------------------
 * Formualar -koniec
 * ---------------------------------------------------------------------------------------------------------- */
    
}
/* -----------------------------------------------------------------------------------------------------------
 * Hamburger
 * ---------------------------------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show'); // Prepínanie zobrazenia menu
    });

    // Skrytie menu po kliknutí mimo neho
    window.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    });
});


/* -----------------------------------------------------------------------------------------------------------
 * Hamburger-koniec
 * ---------------------------------------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------------------------------------
 * FAQ
 * ---------------------------------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');

            // Zavrie všetky ostatné akordeóny
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                    otherItem.querySelector('.accordion-content').style.padding = '0 15px';
                }
            });

            // Prepnúť aktuálny
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                content.style.maxHeight = '0';
                content.style.padding = '0 15px';
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '15px';
            }
        });
    });
});
/* -----------------------------------------------------------------------------------------------------------
 * FAQ -koniec
 * ---------------------------------------------------------------------------------------------------------- */


/* -----------------------------------------------------------------------------------------------------------
 * Slideshow
 * ---------------------------------------------------------------------------------------------------------- */

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    // Skryť všetky obrázky
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Zvýšiť index alebo resetovať
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    // Zobraziť aktuálny obrázok
    slides[slideIndex - 1].style.display = "block";
    // Nastaviť interval prepínania
    setTimeout(showSlides, 6000);
}

// Spustiť funkciu
document.addEventListener("DOMContentLoaded", showSlides);

/* -----------------------------------------------------------------------------------------------------------
 * Slideshow-koniec
 * ---------------------------------------------------------------------------------------------------------- */

