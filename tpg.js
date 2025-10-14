/** @format */
// varijable

let vr = document.querySelector("#vr");
let pm = document.querySelector("#pm");
let qkWh = document.querySelector("#qkWh");
let tkomp = document.querySelector("#tkomp");
let protekla = document.querySelector("#protekla");
let normalna = document.querySelector("#normalna");
let GCV = document.querySelector("#GCV");
let form = document.querySelector("#form");
let inputs = document.querySelectorAll("input");

let err1 = document.querySelector(".errVr");
let err2 = document.querySelector(".errH");
let err3 = document.querySelector(".errqkWh");
let err4 = document.querySelector(".errGCV");

//konstante

//funkcija

const kWh = () => {
    //varijable i konstante

    let rezultat = document.querySelector("#rezultat");

    //patm.toFixed(1);
    /* 	let proteklaKolicina;
     */
    let normalnaKolicina;

    let errRezultat = () => {
        protekla.textContent = "";
        proteklaKolicina = "";
        rezultat.classList.add("none");
        rezultat.classList.remove("display");
    };

    //uslovi

    if (isNaN(vr.value) == true) {
        err1.innerHTML = "Дозвољен је унос само нумеричких карактера";
        errRezultat();
        return;
    } else {
        err1.innerHTML = "";
    }

    if (vr.value == "" || vr.value < 0 || vr.value > 1000000) {
        err1.innerHTML =
            "Унос очитане количине мора да буде позитиван број и не већи од 1.000.000";
        errRezultat();
        return;
    }

    if (qkWh.value == "" || qkWh.value < 0) {
        err3.innerHTML =
            "Унос параметра коефицијент корекције је обавезан и мора да буде већи од 0";
        errRezultat();
        return -1;
    } else if (qkWh.value < 1 || qkWh.value > 2) {
        err3.innerHTML =
            "Могућ унос квалитета је у распону од 1 - 2 са максимум шест децимала";
        errRezultat();
        return -1;
    } else if (isNaN(qkWh.value) == true) {
        err3.innerHTML =
            "Дозвољен је унос само нумеричких карактера, користите тачку уместо зареза за децимале";
        errRezultat();
        return -1;
    } else {
        err3.innerHTML = "";
    }

    if (GCV.value == "" || GCV.value < 0) {
        err4.innerHTML =
            "Унос параметра квалитет гаса је обавезан и мора да буде већи од 0";
        errRezultat();
        return -1;
    } else if (GCV.value < 10 || GCV.value > 12.999999) {
        err4.innerHTML =
            "Могућ унос квалитета је у распону од 10 - 12.999999 са максимум шест децимала";
        errRezultat();
        return -1;
    } else if (isNaN(GCV.value) == true) {
        err4.innerHTML =
            "Дозвољен је унос само нумеричких карактера, користите тачку уместо зареза за децимале";
        errRezultat();
        return -1;
    } else {
        err4.innerHTML = "";
    }
    let proteklaKolicina = vr.value;
    //zaokruzujemo na gornju vrednost
    normalnaKolicina = Math.round(Number(proteklaKolicina) * (pm.value / 1000) / Number(qkWh.value));

    /*  normalna.textContent =
         Math.round(normalnaKolicina).toLocaleString("sr-RS", {
             minimumFractionDigits: 3,
             maximumFractionDigits: 3,
         }) + " m³"; */

    console.log("Vr: " + vr.value);
    console.log("Protekla kolicina: " + proteklaKolicina);
    console.log("Normalna kolicina: " + normalnaKolicina);
    console.log("Energija kWh: " + Math.round(normalnaKolicina * GCV.value));

    //prikaz u delu Protekla količina

    protekla.textContent = proteklaKolicina;
    //prikaz u delu Normalna količina

    normalna.textContent = normalnaKolicina;
    //rezultat
    //result
    rezultat.classList.remove("none");
    rezultat.classList.add("display");

    let energija = Math.round(normalnaKolicina * Number(GCV.value));
    rezultat.textContent = "Утрошено је " + energija + " kWh";

    //reset polja

    /* vr.value = "";
    h.value = "";
    ps.value = "";
    GCV.value = "";
    qkWh.value = ""; */
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    kWh();
});
