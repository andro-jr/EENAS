'use strict'

$(document).ready(function () {
    $(".product-carousel").owlCarousel({
        loop: false,
        nav: false,
        items: 3,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 700,
            },
            600: {
                items: 2,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 700,
            },
            1200: {
                items: 3,
            },

        },

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
})


// Custom navigation action
$(document).ready(function () {
    $('.navigation-prev').click(function () {
        var parentCarousel = $(this).closest('.carousel-container');
        var owl = parentCarousel.find('.owl-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel');
    });
});

$(document).ready(function () {
    $('.navigation-next').click(function () {
        var parentCarousel = $(this).closest('.carousel-container');
        var owl = parentCarousel.find('.owl-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
});

// Lightbox
$(document).ready(function () {
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
    });
});



const navHam = document.querySelector('#navHam');
const navContainer = document.querySelector('#navContainer');
const navBox = document.querySelector('#navContainer');
const navClose = document.querySelector('#navClose');

if (navHam) {

    navHam.addEventListener('click', () => {
        navContainer.classList.remove('hide-nav')
        navContainer.classList.add('show-nav')
    })

    navClose.addEventListener('click', () => {
        navContainer.classList.add('hide-nav')
        navContainer.classList.remove('show-nav')

    });
}



const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');

if (searchBox && searchIcon) {
    searchIcon.addEventListener('click', () => {
        searchBox.classList.toggle('visible')
    })

    document.addEventListener('click', (e) => {
        if (searchBox && searchIcon) {
            if (searchBox.classList.contains('visible') && !e.target.closest('.search-box') && !e.target.classList.contains('search-icon')) {
                searchBox.classList.toggle('visible')
            }
        }
    })
}




// multi select

const multiBox = document.querySelectorAll('.multi-select-box');

const multiHeads = document.querySelectorAll('.multi-item-head');

if (multiHeads) {
    multiHeads.forEach((multiHead) => {
        multiHead.addEventListener('click', () => {
            const multiItems = multiHead.closest('.multi-select-box').querySelector('.multi-select-items');
            multiItems.classList.toggle('show');

            const multiIcon = multiHead.querySelector('img');
            multiIcon.classList.toggle('rotate')
        })
    })
}



// Category collapse on mobile
const categoryHead = document.querySelector('#categoryHead');
const categoryArrow = document.querySelector('.category-arrow')

if (categoryHead && window.innerWidth < 768) {
    const categoryFilter = document.querySelector('.category-filter');

    categoryHead.addEventListener('click', () => {
        categoryFilter.classList.toggle('filter-show');

        categoryArrow.classList.toggle('rotate')
    })
}