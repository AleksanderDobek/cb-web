let loader = document.getElementsByClassName('loader')[0];
let apiURL = 'https://api.apixu.com/v1/forecast.json?key=3983b588d2f240aea4282620191004&days=7&q=';

let cityForm = document.getElementById('get-city');

//funkcja pokzująca kręciołoek
function showLoader() {
    loader.classList.add('show');
}
//ukrywająca kręciołek
function hideLoader() {
    loader.classList.remove('show');
}



function showCurrentDayweather(current, location) {  // ta funcja będzie przyjmowała/wczytywała dane z api current bo tak się nazywa w tym api od Piotrka
    // wyświetl dzisiaejszy dzień na podsrawie danych z api i umiesc go w html
    let html = '';
    html += '<h2>Dzisiejsza pogoda dla ' + location.name + ' </h2>';
    html += '<div class="day">';
    html += '<div class="right">';
    html += '<img src="' + current.condition.icon + ' " alt=""/>';
    html += '</div>';
    html += '<div class="left">';

    html += '<div class="param">';
    html += '<div class="name">Temperatura</div>';
    html += '<div class="value">' + current.temp_c + '°C</div>';
    html += '</div>';

    html += '<div class="param">';
    html += '<div class="name">Ciśnienie</div>';
    html += '<div class="value">' + current.pressure_mb + 'hPa</div>';
    html += '</div>';


    html += '</div>';
    html += '</div>';
    //jak to złapać w html teraz ? mamy nasz div current-day
    document.getElementById('current-day').innerHTML = html;  //złap nasz current-day ktory znajduje sie w html
}



//funkcja wczytująca dane do api
function loadDataFromApi(city = 'London') {
    showLoader();  // wołamy naszą funkcje pokaż kręciołek od tej pory się kręci
    let currentApiURL = apiURL + city;  // (tutaj nowe zdefiniowanie zmiennej) no bo dostaniemy link plus nowy adres z nowym miastem to co po q

    axios({    //wołamy naszą metode z zewnątrz te 5 metod czyli na początek GET
        method: 'GET', //no bo chcemy najpierw coś ściągnąć
        url: currentApiURL  // zapytaj imetodą GET url currentApiURL 
    }).then(function (response) {  //jak to zrobisz to otrzymasz response
        hideLoader();
        let dataApi = response.data;  // stwórz zmienną dataApi dla odpowiedzi z danymi z api
        let cityName = response.data;
        showCurrentDayweather(dataApi.current, cityName.location); //wołamy wszystkie dane z current

    })
}


loadDataFromApi();


cityForm.addEventListener('submit', function (event) {  //nasłuchujemy wysyłki (kliknięcia) ale jeszcze nie blokujemy (tutaj 'submit' zdefiniowanie)
    let cityName = document.getElementById('city').value;

    if (cityName != "") {    //rózne od pustego
        loadDataFromApi(cityName);
    }
    event.preventDefault();  //to spowoduje zablokowanie przeładowania strony
})