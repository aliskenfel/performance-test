const container = document.querySelector('header');
let isScrolling = false;
let scrollTimer;

window.addEventListener("scroll", function () {
    isScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
        isScrolling = false;
    }, 100);
});

function smoothScroll() {
    if (isScrolling) {
        requestAnimationFrame(smoothScroll);
        const currentScrollTop = window.scrollY;
        container.style.transform = `translateY(-${currentScrollTop}px)`;
    }
}

window.addEventListener("wheel", function () {
    isScrolling = false;
});

window.addEventListener("resize", function () {
    isScrolling = false;
});

window.addEventListener("scroll", function () {
    if (!isScrolling) {
        requestAnimationFrame(smoothScroll);
    }

    const scrollY = window.scrollY;
    if (scrollY > 50) { // Adjust the scroll position where the transformation happens
        container.classList.add('island');
    } else {
        container.classList.remove('island');
    }
});
