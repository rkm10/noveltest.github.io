// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    pageHeader();
    backToTop();
    if (document.getElementById("rightSidebarContent")) {
        stickySidebar();
    }
};
// ---------------------------------------------------------------- //

// ---Sticky Sidebar Starts---------------------------------------- //

let pageHeaderEl = document.getElementById("header");
let bannerForm = document.getElementById("bannerFloatingForm");

// Function to check if the element is in or below the header
function isElementInHeader() {
    const elementRect = bannerForm.getBoundingClientRect();
    const headerRect = pageHeaderEl.getBoundingClientRect();

    // Check if the element's bottom edge is above or at the same level as the header's top edge
    return elementRect.bottom <= headerRect.top;
}


// Add the sticky class to the sidebar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickySidebar() {
    var sidebar = document.getElementById("rightSidebarContent");
    var sticky = sidebar.offsetTop;
    sticky -= 70;
    if (isElementInHeader()) {
        sidebar.classList.add("stickySidebar")
    } else {
        sidebar.classList.remove("stickySidebar");
    }
}
// ----Sticky Sidebar Ends----------------------------------------------//

// ---Back To Top Starts----------------------------------------------- //
var backToTopBtn = document.getElementById("backToTop");
function backToTop() {
    if (window.pageYOffset >= 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}
// ---Back To Top Ends----------------------------------------------- //

var header = document.getElementById("header");

function pageHeader() {
    if (window.pageYOffset >= 100) {
        header.classList.add("headerSticky")
    } else {
        header.classList.remove("headerSticky");
    }
}

// Floating Form Button ------------------------------------------------//
const triggerBtn = document.getElementById("floating-lead-btn");
const floatForm = document.getElementsByClassName("floating-lead-form")[0];
const floatFormClose = document.getElementsByClassName("floating-form-close")[0];
triggerBtn.addEventListener("mouseover", function () {
    floatForm.style.right = "0px";
});
floatFormClose.addEventListener("click", function () {
    floatForm.style.right = "-500px";
});

///---- swiper will be removed 71 to 181-------///  
//  Initialize Swiper -----------------------------------------//

// // ------ Hero Slider Starts----------------------------------//
// var heroSwiper = new Swiper(".heroSwiper", {
//     spaceBetween: 0,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: true
//     },
//     pagination: false,
// });
// // ------ Hero Slider Ends------------------------------------//

// // ------ Gallery Slider Starts-------------------------------//
// var gallerySwiper = new Swiper(".gallerySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     centerSlide: 'true',
//     grabCursor: 'true',
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false
//     },
//     pagination: false,
//     breakpoints: {
//         // when window width is >= 0px
//         0: {
//             slidesPerView: 1,
//         },
//         500: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         992: {
//             slidesPerView: 3,
//         }
//     },
// });
// // ------ Gallery Slider Ends---------------------------------//

// // ------ Amenities Slider Starts-----------------------------//
// var amenitiesSwiper = new Swiper(".amenitiesSwiper", {
//     slidesPerView: 2,
//     spaceBetween: 20,
//     loop: true,
//     centerSlide: 'true',
//     grabCursor: 'true',
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false
//     },
//     pagination: false,
//     breakpoints: {
//         // when window width is >= 0px
//         0: {
//             slidesPerView: 2,
//         },
//         500: {
//             slidesPerView: 3,
//         }
//     },
// });
// // ------ Amenities Slider Ends-------------------------------//

// // ------ Client Slider Starts------------------------------//
// var clientSwiper = new Swiper(".clientSwiper1", {
//     slidesPerView: 7,
//     spaceBetween: 20,
//     loop: true,
//     centerSlide: 'true',
//     grabCursor: 'true',
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false
//     },
//     breakpoints: {
//         // when window width is >= 0px
//         0: {
//             slidesPerView: 2,
//         },
//         500: {
//             slidesPerView: 4,
//         },
//         768: {
//             slidesPerView: 6,
//         },
//         992: {
//             slidesPerView: 5,
//         },
//         1200: {
//             slidesPerView: 7,
//         }
//     },
// });
// // ------ Client Slider Ends---------------------------------//

// // ------ Our Presence Slider Starts----------------------------//
// var presenceSwiper = new Swiper(".ourPresenceSwiper", {
//     slidesPerView: 1,
//     loop: true,
//     navigation: {
//         prevEl: '.swiper-button-prev',
//     }
// });
// ------ Our Presence Ends-------------------------------------//

// ------ Form Popup Script Starts -----------------------------//
$(document).ready(function () {
    $('.popup_btn').click(function () {
        $('.popup_form').addClass('show_popup');
        $('.close_popup').show();
    });
    $('.close').click(function () {
        $('.popup_form').removeClass('show_popup');
        $('.close_popup').hide();
    });
    $('.close_popup').click(function () {
        $('.popup_form').removeClass('show_popup');
        $(this).hide();
    });
});

// ------ Office Solutions Starts -----------------------------//
function openCard(card) {
    document.getElementById(`popup${card}`).style.display = 'flex';
    document.querySelector(`.${card}`).style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeCard(card) {
    document.getElementById(`popup${card}`).style.display = 'none';
    document.querySelector(`.${card}`).style.display = 'none';
    document.body.style.overflow = 'visible';
}
// ------ Office Solutions Ends -----------------------------//
