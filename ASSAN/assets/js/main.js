let slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    mode: 'gallery',
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    controlsText: ['&#60;', '&#62;'],
});

//inicjacja animation on scroll
AOS.init();

// usunięcie kręciołka jak się załaduje strona
window.addEventListener('load', function () {
    let loader = document.getElementsByClassName('loader')[0];

    setTimeout(function () {
        loader.classList.add('none');
    }, 1000)
})

// przyklejenie nawigacji po scrollu
let navigation = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        navigation.classList.add('fixed')
    } else {
        navigation.classList.remove('fixed')
    }
})

let arrowUp = document.getElementById('arrow-up');

window.addEventListener('scroll', function () {
    let arrowUp = document.getElementById('arrow-up');
    console.log(arrowUp);
    if (window.pageYOffset > 0) {
        arrowUp.classList.add('show');
        navigation.classList.add('white');

    } else {
        arrowUp.classList.remove('show');
        navigation.classList.remove('white');
    }
})

arrowUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})