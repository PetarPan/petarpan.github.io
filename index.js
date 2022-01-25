/** @format */


// varijable

let vr = document.querySelector("#vr");
let pm = document.querySelector("#pm");
let h = document.querySelector("#h");
let ps = document.querySelector("#ps");
let ts = document.querySelector("#ts");
let tr = document.querySelector('#tr');
let period = document.querySelector('#period');
let tkomp = document.querySelector('#tkomp')
let protekla = document.querySelector('#protekla')
let kvalitet = document.querySelector('#kvalitet')


//konstante

pm = 22;
ps = 1013.25;
ts = 288.15;

//funkcija

btn.addEventListener('click', (e) => {

    //varijable i konstante

    let rezultat = document.querySelector('#rezultat')
    let patm = 1016 - 0.108 * h.value
    let kvalitet2 = 33338.35
    let proteklaKolicina


    //uslovi 

    if (vr.value == "" || vr.value < 0) {
        rezultat.textContent = "Унос очитане количине је обавезан и мора да буде већи од 0";
        rezultat.style.color = "red";
        return
    }
    if (h.value == "" || vr.value < 0) {
        rezultat.textContent = "Унос параметра 'h', висине је обавезан и мора да буде већи од 0";
        rezultat.style.color = "red";
        return
    }

    if (tkomp.value == 'da') {
        protekla.textContent = 'Протекло је ' + Math.round(Number(vr.value) * ((pm + patm) / ps)) + ' m³'
        proteklaKolicina = Number(vr.value) * ((pm + patm) / ps)

    } else {
        protekla.textContent = 'Протекло је ' + Math.round(Number(vr.value) * ((pm + patm) / ps) * (ts / period.value)) + ' m³'
        proteklaKolicina = Number(vr.value) * ((pm + patm) / ps) * (ts / period.value)
    }


    //rezultat 


    rezultat.textContent = 'Утрошено је ' + Math.round(proteklaKolicina * 34868.06 / kvalitet2) + ' m³'


    //reset polja


    vr.value = "";
    h.value = "";
    ps.value = "";

});