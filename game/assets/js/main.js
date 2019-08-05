let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Ą",
    "Ć",
    "Ę",
    "Ł",
    "Ń",
    "Ó",
    "Ś",
    "Ź",
    "Ż"
];

let attempts = 5;
let gameButtonStart = document.querySelector('.game-start');
let attemptsContainer = document.querySelector('.game-attempts');
let lettersContainer = document.querySelector('.game-letters');
let apiUrl = 'https://codebrainers.apppi.pl/api/szubienica';
let categoryContainer = document.querySelector('.game-category');
let sentenceContainer = document.querySelector('.game-sentence');
let sentenceNoSpace, sentence;

/// kliknięcie losuj nowe hasło

gameButtonStart.addEventListener('click', function () {
    attempts = 5;
    showAttempts();
    createLetters();  /// tutaj mamy wywołania funckji
    generateNewSentence();

    ///  alert('zaczynamy gre'); //sprawdzasz czy działa


    let clickLetters = lettersContainer.querySelectorAll('.game-letter');
    clickLetters.forEach(function (letter) {
        letter.addEventListener('click', function (event) {
            let clickLetter = event.target.dataset.letter;
            checkLetterInSentence(clickLetter);


            event.target.disabled = true;
        })
    })
})


function checkLetterInSentence(letter) {

    // sprawdzamy czy nasz slogan zawiera litere

    if (sentence.indexOf(letter) !== -1) {
        let noSpace = sentence.replace(/ /g, "");
        for (let i = 0; i < noSpace.length; i++) {
            if (noSpace[i] === letter) {
                sentenceContainer.querySelectorAll('.game-sentence-letter')[i].innerHTML = letter; /// przypisz letter
            }
        }


        noSpace = sentence.replace(/ /g, "");

        if (letters.length === slogan) {
            alert("wygrałeś")
        }

    } else {
        //nie ma takiej litery w haśle
        attempts--;   ///obniża o jeden 1
        showAttempts(); // liczy ilość prób

        if (attempts <= 0) {
            alert('Przegrałeś');
        }
    }

}


//pokaż ilość ruchów uzytkownikowi
function showAttempts() {
    attemptsContainer.innerHTML = attempts;
}

//funkcja generujaca litery

function createLetters() {
    lettersContainer.innerHTML = "";

    ///nowa petla po nowemu bez if sratata
    letters.forEach(function (letter) {
        lettersContainer.innerHTML
            += '<button class="game-letter" data-letter="' + letter + '">' + letter + '</button>'
        // letter tutaj to  juz konkretna literka z tablicy  += nie usuwa ale dodaje poniewaz to petla
    })
}


function generateNewSentence() {
    axios({
        method: "GET",
        url: apiUrl
    }).then(function (response) {
        let category = response.data.category;
        let slogan = response.data.slogan.toUpperCase();
        sentence = slogan;
        categoryContainer.innerHTML = category;
        sentenceNoSpace = slogan.replace(/ /g, "");  //wyrazenie regularne złamanielinii bo nie czyta
        sentenceContainer.innerHTML = "";

        for (let i = 0; i < slogan.length; i++) {
            if (slogan[i] === " ") {
                sentenceContainer.innerHTML += '<div class="game-sentence-space"></div>';

            } else {
                sentenceContainer.innerHTML += '<div class="game-sentence-letter"></div>';

            }
        }

    })


}

