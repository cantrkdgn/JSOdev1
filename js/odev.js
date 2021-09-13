// **** Javascript İsim ve Saat Yerlestirme Odevi

let userName = prompt("Lütfen İsminizi Giriniz");
let info = document.querySelector('#info')
info.innerHTML += userName


// let time;
// setInterval(() => {
//     a = new Date();
//     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//     document.querySelector('#span').innerHTML = time;
//   }, 1000);



// span.innerHTML = time

const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];


setInterval(showTime,1000);
function showTime(){
    let time = new Date;
    let hour = time.getHours();
    let min = time.getMinutes();      
    let sec = time.getSeconds();
    let day = days[time.getDay()];

    let currentTime = hour + ":" + min + ":" + sec +" "+ day;

    document.getElementById("span").innerHTML = currentTime;
    
}

console.log(!!2)