/** @format */
// variables

let vr = document.querySelector("#vr");
let pm = document.querySelector("#pm");
let h = document.querySelector("#h");
let ps = document.querySelector("#ps");
let ts = document.querySelector("#ts");
let tr = document.querySelector("#tr");
let q = document.querySelector("#q");
let period = document.querySelector("#period");
let tkomp = document.querySelector("#tkomp");
let protekla = document.querySelector("#protekla");
let kvalitet = document.querySelector("#kvalitet");
let form = document.querySelector("#form");
let inputs = document.querySelectorAll("input");
let vrErr = document.querySelector(".vrErr");
let hErr = document.querySelector(".hErr");
let qErr = document.querySelector(".qErr");

let err1 = document.querySelector(".errVr");
let err2 = document.querySelector(".errH");
let err3 = document.querySelector(".errQ");

//constant values

pm = 22;
ps = 1013.25;
ts = 288.15;

//funkcija
const svedeneFunk = () => {
  //variables inside function

  let rezultat = document.querySelector("#rezultat");
  let patm = 1016 - 0.108 * h.value;
  let kvalitet2 = 33338.35;
  let proteklaKolicina;

  let errRezultat = () => {
    protekla.textContent = ''
    proteklaKolicina = ''
    rezultat.classList.add('none')
    rezultat.classList.remove('display')
  }

  //validation
  
  if (isNaN(vr.value) == true) {
    err1.innerHTML = "Дозвољен је унос само нумеричких карактера";
    errRezultat()
    return;
  } else {
      err1.innerHTML = ''
  }
  if (isNaN(h.value) == true) {
    err2.innerHTML = "Дозвољен је унос само нумеричких карактера";
    errRezultat()
    return;
  } else {
    err2.innerHTML = ''
}

  if (isNaN(q.value) == true) {
    err3.innerHTML = "Дозвољен је унос само нумеричких карактера";
    errRezultat()
    return;
  } else {
    err3.innerHTML = ''
}

  if (vr.value == "" || vr.value < 0 || vr.value > 10000) {
    err1.innerHTML =
      "Унос очитане количине мора да буде позитиван број и не већи од 10000";
      errRezultat()
    return;
  }

  if (h.value == "" || h.value < 0 || h.value > 1100) {
    err2.innerHTML =
      "Унос висине мора да буде позитиван број и не већи од 1100";
      errRezultat()
    return;
  }
  if (q.value == "" || q.value < 0 || q.value < 25000 || q.value > 42000) {
    err3.textContent = "Квалитет мора да буде у опсегу 25000 - 42000";
    errRezultat()
    return;
  }


  //temperature compensator od not?
  if (tkomp.value === "da") {
    // protekla.textContent = 'Протекло је ' + Math.round(Number(vr.value) * ((pm + patm) / ps)) + ' m³'
    proteklaKolicina = Number(vr.value) * ((pm + patm) / ps);
    protekla.textContent =
      "Протекла количина износи " + Math.round(proteklaKolicina) + " m³";
  } else {
    //protekla.textContent = 'Протекло је ' + Math.round(Number(vr.value) * ((pm + patm) / ps) * (ts / period.value)) + ' m³'
    proteklaKolicina =
      Number(vr.value) * ((pm + patm) / ps) * (ts / period.value);
    protekla.textContent =
      "Протекла количина износи " + Math.round(proteklaKolicina) + " m³";
  }

  //result
  rezultat.classList.remove('none');
  rezultat.classList.add('display');
  rezultat.textContent =
    "Обрачуната количина износи " +
    Math.round((proteklaKolicina * Number(q.value)) / kvalitet2) +
    " m³";

  //reset error
  err1.innerHTML = "";
  err2.innerHTML = "";
  err3.innerHTML = "";

  //reset input fields
  vr.value = "";
  h.value = "";
  q.value = "";
  
};


//submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  svedeneFunk();
});
 
