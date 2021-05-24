let guest = prompt("Hello stranger. what's your name?");
let name = document.querySelector('#name');

if ( guest.length > 0) {
    name.innerHTML = `${guest} !`
} else if (guest == null) {
    name.innerHTML = "Wanderer !"
} else {
    name.innerHTML = "Wanderer !"
};

function clock() {
    let zaman = new Date();
    let saat = zaman.getHours();
    let dakika = zaman.getMinutes();
    let saniye = zaman.getSeconds();
    let gun = zaman.getDay();
    let ay = zaman.getMonth();
    saat = saniyedakika(saat); 
    dakika = saniyedakika(dakika);
    saniye = saniyedakika(saniye);
    gun = days(gun);
    ay = months(ay);

    document.querySelector('#firstClock').innerHTML = saat + ":" + dakika + ":" + saniye;
    document.querySelector('#firstDay').innerHTML = gun;
    document.querySelector('#firstMonth').innerHTML = zaman.getDate() +" "+ ay;
    document.querySelector('#years').innerHTML = zaman.getFullYear();

    let t = setTimeout(clock,1000);
}

function saniyedakika(i) {
    if (i<10) {
        i = "0"+i
    }; return i;
}
function days(gun) {
    if ( gun == 0) {
        gun = "Sunday";
    }; if(gun == 1) {
        gun = "Monday";
    }; if(gun == 2) {
        gun = "Tuesday";
    }; if(gun == 3) {
        gun = "Wednesday";
    }; if(gun == 4) {
        gun = "Thursday";
    }; if(gun == 5) {
        gun = "Friday";
    }; if(gun == 6) {
        gun = "Saturday";
    };
    return gun;
}

function months(ay) {
    if ( ay == 0) {
        ay = "January";
    }; if(ay == 1) {
        ay = "February";
    }; if(ay == 2) {
        ay = "March";
    }; if(ay == 3) {
        ay = "April";
    }; if(ay == 4) {
        ay = "May";
    }; if(ay == 5) {
        ay = "June";
    }; if(ay == 6) {
        ay = "July";
    };; if(ay == 7) {
        ay = "August";
    }; if(ay == 8) {
        ay = "September";
    }; if(ay == 9) {
        ay = "OCtober";
    }; if(ay == 10) {
        ay = "November";
    }; if(ay == 11) {
        ay = "December";
    };
    return ay;
}