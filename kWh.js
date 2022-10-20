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

//konstante

pm = 22;
ps = 1013.25;
ts = 288.15;

//funkcija

btn.addEventListener("click", (e) => {
    //varijable i konstante

    let rezultat = document.querySelector("#rezultat");
    let patm = 1016 - 0.108 * h.value;
    let kvalitet2 = 33338.35;
    let proteklaKolicina;
    let normalnaKolicina;

    //uslovi

    if (h.value == "e" || h.value == "E" || vr.value == "e" || vr.value == "E") {
        rezultat.textContent = "Дoзвољен је унос само нумеричких симбола";
        rezultat.style.color = "red";
        return;
    }
    if (h > 1200) {
        rezultat.textContent = "Надморска висина не може да буде већа од 1200";
        rezultat.style.color = "red";
        return;
    }
    if (vr.value == "" || vr.value < 0) {
        rezultat.textContent =
            "Унос очитане количине је обавезан и мора да буде већи од 0";
        rezultat.style.color = "red";
        return;
    }

    if (h.value == "" || vr.value < 0) {
        rezultat.textContent =
            "Унос параметра 'h', висине је обавезан и мора да буде већи од 0";
        rezultat.style.color = "red";
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
        proteklaKolicina = Number(vr.value) * ((pm + patm) / ps).toFixed(6);
        protekla.textContent = Math.trunc(Number(proteklaKolicina)) + " m³";
    } else {
        proteklaKolicina =
            Number(vr.value) * ((pm + patm) / ps) * (ts / period.value).toFixed(6);
        protekla.textContent = Math.trunc(proteklaKolicina) + " m³";
    }
    //zaokruzujemo na gornju vrednost
    normalnaKolicina = (Number(proteklaKolicina) / Number(qkWh.value)).toFixed(6);

    normalna.textContent = Math.ceil(normalnaKolicina) + " m³";

    console.log("Protekla kolicina " + proteklaKolicina);
    console.log("Normalna kolicina " + normalnaKolicina);
    console.log("Konacno kWh " + normalnaKolicina * GCV.value);
    //rezultat

    rezultat.textContent =
        "Утрошено је " + Math.ceil(normalnaKolicina * GCV.value) + " kWh";
    //reset polja

    vr.value = "";
    h.value = "";
    ps.value = "";
});
