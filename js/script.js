let lastScrollTop = 0; // Keeps track of last scroll position

window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the header and nav links
        header.classList.add('hidden');
        document.querySelector('.nav-links').classList.remove('active');
    } else {
        // Scrolling up, show the header
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll value
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Toggle nav visibility
    });

    // Close nav-links when clicking outside of it
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
});
