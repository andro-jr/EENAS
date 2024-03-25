'use strict'

$(".product-carousel").owlCarousel({
    loop: false,
    nav: false,
    items: 3,
    margin: 20,

    onChanged: function (event) {
        const parent = event.target.closest('.carousel-container');

        if (!parent) return
        const customNext = parent.querySelector('.navigation-next')
        const customPrev = parent.querySelector('.navigation-prev')
        var carousel = event.relatedTarget;
        var hasNext = carousel.relative(carousel.current()) < carousel.maximum();
        var hasPrev = carousel.relative(carousel.current()) > 0;

        if (hasNext) {
            customNext.classList.remove('disabled') // Enable the next button
        } else {
            customNext.classList.add('disabled') // Disable the next button
        }

        if (hasPrev) {
            customPrev.classList.remove('disabled') // Enable the next button
        } else {
            customPrev.classList.add('disabled') // Disable the next button
        }

    }
});