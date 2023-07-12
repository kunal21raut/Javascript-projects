function clock() {

    const date = new Date();

    let hour = document.querySelector('#hour');

    let minutes = document.querySelector("#minutes");

    let seconds = document.querySelector("#seconds");

    let ampm = document.querySelector('#ampm');

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    var am = 'AM';

    if (h > 12){
        h = h - 12;
        var am = 'PM';
    }
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}

var interval = setInterval(clock, 1000);

const date = new Date();

var currdate = document.querySelector("#date");

currdate.innerHTML = date.toLocaleDateString();