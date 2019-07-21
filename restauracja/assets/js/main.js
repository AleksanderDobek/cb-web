window.addEventListener('DOMContentLoaded', function () {       ///dupochron


    let arrowUp = document.getElementById('arrow-up');
    let navigation = document.getElementsByTagName('nav')[0];

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

    let headers = document.querySelectorAll('.panel .header'); // bo header jest w panel
    //robimy fora bo odwołujemy się do kazdego elem
    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', function () {  //// teraz musimy sie dostać do sąsiedniego elementu czyli description
            let description = this.nextElementSibling;
            if (description.style.maxHeight) {
                description.style.maxHeight = null;

            } else {
                description.style.maxHeight = description.scrollHeight + 'px';
            }
        })
    }
    let hamburger = document.getElementById('hamburger')
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        document.body.classList.toggle('menu-open')
    })







    // description.classList.toggle('active');
})

