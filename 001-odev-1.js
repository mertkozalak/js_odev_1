

let user = prompt("Lütfen Adınızı Giriniz:");

let userDOM = document.querySelector("#user");

userDOM.innerHTML = `Merhaba, ${user}! Hoş Geldin!`
function showTime(){
    let date = new Date();
    let localeString = date.toLocaleString();
    let today = date.getDay();
    let gun;
    switch(today){
        case 0:
            gun = "Pazar"
        break;
        case 1:
            gun = "Pazartesi"
        break;
        case 2:
            gun = "Salı"
        break;
        case 3:
            gun = "Çarşamba"
        break;
        case 4:
            gun = "Perşembe"
        break;
        case 5:
            gun = "Cuma"
        break;
        case 6:
            gun = "Cumartesi"
        break;
    };
    document.querySelector("#myClock").innerHTML = `${localeString} ${gun}`
};

showTime();
setInterval(showTime, 1000);

