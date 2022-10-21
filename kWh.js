/** @format */
// varijable

let vr = document.querySelector("#vr");
let pm = document.querySelector("#pm");
let h = document.querySelector("#h");
let ps = document.querySelector("#ps");
let ts = document.querySelector("#ts");
let tr = document.querySelector("#tr");
let qkWh = document.querySelector("#qkWh");
let period = document.querySelector("#period");
let tkomp = document.querySelector("#tkomp");
let protekla = document.querySelector("#protekla");
let normalna = document.querySelector("#normalna");
let GCV = document.querySelector("#GCV");
let form = document.querySelector("#form");
let inputs = document.querySelectorAll("input");

let err1 = document.querySelector(".errVr");
let err2 = document.querySelector(".errH");

//konstante

pm = 22;
ps = 1013.25;
ts = 288.15;

//funkcija

const kWh = () => {
    //varijable i konstante

    let rezultat = document.querySelector("#rezultat");
    let patm = 1016 - 0.108 * h.value;
    let proteklaKolicina;
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
    if (isNaN(h.value) == true) {
        err2.innerHTML = "Дозвољен је унос само нумеричких карактера";
        errRezultat();
        return;
    } else {
        err2.innerHTML = "";
    }

    /* if (isNaN(q.value) == true) {
        err3.innerHTML = "Дозвољен је унос само нумеричких карактера";
        errRezultat();
        return;
    } else {
        err3.innerHTML = "";
    } */

    if (vr.value == "" || vr.value < 0 || vr.value > 10000) {
        err1.innerHTML =
            "Унос очитане количине мора да буде позитиван број и не већи од 10000";
        errRezultat();
        return;
    }

    if (h.value == "" || h.value < 0 || h.value > 1100) {
        err2.innerHTML =
            "Унос висине мора да буде позитиван број и не већи од 1100";
        errRezultat();
        return;
    }
    /*  if (q.value == "" || q.value < 0) {
                rezultat.textContent =
                    "Унос параметра квалитет гаса је обавезан и мора да буде већи од 0";
                rezultat.style.color = "red";
                return;
            }
            if (q.value < 2000) {
                rezultat.textContent = "Унесите исправан квалитет";
                rezultat.style.color = "red";
                return;
            } */

    if (tkomp.value === "da") {
        proteklaKolicina = (Number(vr.value) * ((pm + patm) / ps)).toFixed(6);
        protekla.textContent = Math.trunc(Number(proteklaKolicina)) + " m³";
    } else {
        proteklaKolicina = (
            Number(vr.value) *
            ((pm + patm) / ps) *
            (ts / period.value)
        ).toFixed(6);
        protekla.textContent = Math.trunc(proteklaKolicina) + " m³";
    }
    //zaokruzujemo na gornju vrednost
    normalnaKolicina = Number(proteklaKolicina) / Number(qkWh.value);

    normalna.textContent = Math.ceil(normalnaKolicina) + " m³";

    console.log("Protekla kolicina " + proteklaKolicina);
    console.log("Normalna kolicina " + normalnaKolicina);
    console.log("Konacno kWh " + normalnaKolicina * GCV.value);
    //rezultat
    //result
    rezultat.classList.remove("none");
    rezultat.classList.add("display");

    rezultat.textContent =
        "Утрошено је " + Math.ceil(normalnaKolicina * GCV.value) + " kWh";
    //reset polja

    vr.value = "";
    h.value = "";
    ps.value = "";
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    kWh();
});