window.addEventListener("scroll", (e) => {
    const target = document.querySelector("#parallaxSc");

    var offset = target.getBoundingClientRect().top + window.scrollY;
    var value = offset-window.scrollY;

    var scrolled = window.pageYOffset;
    var rate = value*0.2;

    target.style.transform = `translate3d(0, ${-rate}px, 0)`


})