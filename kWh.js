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
    let err3 = document.querySelector(".errqkWh");
    let err4 = document.querySelector(".errGCV");

    //konstante

    pm = 22;
    ps = 1013.25;
    ts = 288.15;

    //funkcija

    const kWh = () => {
        //varijable i konstante

        let rezultat = document.querySelector("#rezultat");
        let patm = 1016 - (0.108 * h.value).toFixed(1);
        //patm.toFixed(1);
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

        if (tkomp.value === "da") {
            proteklaKolicina = Math.round((Number(vr.value) * ((pm + patm) / ps)));
            protekla.textContent = Math.round(Number(proteklaKolicina)) + " m³";
        } else {
            proteklaKolicina = (
                Math.round(Number(vr.value) *
                ((pm + patm) / ps) *
                (ts / period.value)
            ));
            protekla.textContent = Math.round(proteklaKolicina) + " m³";
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
        //zaokruzujemo na gornju vrednost
        normalnaKolicina = Math.round(Number(proteklaKolicina) / Number(qkWh.value));

        normalna.textContent = Math.round(normalnaKolicina) + " m³";

        console.log("Vr: " + vr.value);
        console.log("pm: " + pm);
        console.log("ps: " + ps);
        console.log("Patm: " + patm);
        console.log("ts: " + ts);
        console.log("Period: " + period.value);
        console.log("Protekla kolicina: " + proteklaKolicina);
        console.log("Normalna kolicina: " + normalnaKolicina);
        console.log("Energija kWh: " + Math.round(normalnaKolicina * GCV.value));
        //rezultat
        //result
        rezultat.classList.remove("none");
        rezultat.classList.add("display");

        rezultat.textContent =
            "Утрошено је " + Math.round(normalnaKolicina * Number(GCV.value)) + " kWh";
        //reset polja

        vr.value = "";
        h.value = "";
        ps.value = "";
        GCV.value = "";
        qkWh.value = "";
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        kWh();
    });

var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

console.log(visitCount);

function cb(response) {
    let visits = document.getElementById("visits");
    visits.innerText = response.value;
    console.log("Number of visits is " + visits.innerHTML);
}

