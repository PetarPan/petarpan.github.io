/** @format */

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




pm = 22;
ps = 1013.25;
ts = 288.15;








btn.addEventListener('click', (e) => {
    let rezultat = document.querySelector('#rezultat')

    /*   if (vr.value == "") {
          rezultat.textContent = "Унос параметра 'vr' је обавезан";
          rezultat.style.color = "red";
          return
      }
      if (h.value == "") {
          rezultat.textContent = "Унос параметра 'h' је обавезан";
          rezultat.style.color = "red";
          return
      } */

    /*  if (tkomp.value == "ne") {
         svedena.textContent = 'Утрошено је ' + Number(vr.value) * ((pm + (1016 - (.108 - Number(h.value)))) / ps) * (ts / period.value) + " nema t "
     } else {
         svedena.textContent = 'Утрошено је ' + Number(vr.value) * ((pm + (1016 - (.108 - Number(h.value))))) + "ima t"
     } */
    let patm = 1016 - 0.108 * h.value
    let kvalitet2 = 33338.35

    if (tkomp.value == 'da') {
        protekla.textContent = 'Протекло је ' + Math.round(Number(vr.value) * ((pm + patm) / ps))
        protekla = Number(vr.value) * ((pm + patm) / ps)

    } else {
        protekla.textContent = Math.round(Number(vr.value) * ((pm + patm) / ps) * (ts / period.value))
        protekla = Number(vr.value) * ((pm + patm) / ps) * (ts / period.value)
    }

    rezultat.textContent = 'Утрошено је ' + Math.round(protekla * 34868.06 / kvalitet2)



















    vr.value = "";
    h.value = "";
    ps.value = "";

});