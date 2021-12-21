/** @format */

let inputGmrs = document.querySelector("#gmrs");
let inputMrs = document.querySelector("#mrs");
let inputHs = document.querySelector("#hs");
let rezultat = document.querySelector("#rezultat");
let btn = document.querySelector("#btn");




btn.addEventListener('click', (e) => {

    if (inputGmrs.value == "") {
        rezultat.textContent = "Унос параметра 'h1' је обавезан";
        rezultat.style.color = "red";
        return
    }
    if (inputMrs.value == "") {
        rezultat.textContent = "Унос параметра 'h2' је обавезан";
        rezultat.style.color = "red";
        return
    }

    //razlike u nadmorskim visinama
    let razlika1 = Number(inputGmrs.value) - Number(inputMrs.value);

    if (razlika1 < 0) {
        razlika1 = razlika1 * -1;
    }
    let razlika2 = Number(inputHs.value) - Number(inputMrs.value);
    if (razlika2 < 0) {
        razlika2 = razlika2 * -1;
    }
    let razlika3 = Number(inputGmrs.value) - Number(inputHs.value);
    if (razlika3 < 0) {
        razlika3 = razlika3 * -1;
    }
    let n = (inputHs.value - inputMrs.value) / 50;
    let h3;

    //uslovi

    if (razlika1 <= 50 && (razlika2 <= 50) & (razlika3 <= 50)) {
        rezultat.textContent = "Надморска висина за ДГМ је:  " + inputGmrs.value + " " + "метара";
        //inputGmrs.value;
    }
    if (razlika1 <= 50 && razlika2 > 50) {
        rezultat.textContent = "Надморска висина за ДГМ је:  " + inputGmrs.value + " " + "метара";
    }
    if (razlika1 >= 50 && razlika2 <= 50) {
        rezultat.textContent = "Надморска висина за ДГМ је:  " + inputMrs.value + " " + "метара";
        //inputMrs.value
    }
    if (razlika1 >= 50 && razlika2 >= 50) {
        //rezultat.textContent = inputHs.value
        //rezultat.textContent = inputMrs.value + n * 50;
        /*  if (n < 0) {
            n = n * (-1)
          }  */
        if (n < 0) {
            h3 = Number(inputMrs.value) + (-n) * 50;
            rezultat.textContent = `Надморска висина за ДГМ је:  ${h3} метара`;
        } else if (n > 0) {
            h3 = Number(inputMrs.value) + n * 50;
            rezultat.textContent = `Надморска висина за ДГМ је: ${h3} метара`;
        }
        //sta ako je hs - mrs minus?? sabira se ili oduzima, kada se sabira, a kada oduzima???
        //dodati opcije za vise gmrs ili mrs
    }
    inputGmrs.value = "";
    inputMrs.value = "";
    inputHs.value = "";
});

const aside = document.querySelector('aside')
const btnInfo = document.querySelector('#btn-info')

const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const p4 = document.createElement('p')



const div = document.createElement('div')
div.classList.add('none')
div.classList.add('div')

document.body.append(div)

btnInfo.addEventListener('click', () => {
    console.log('click');
    div.classList.toggle('show')


    p1.textContent = `h - надморска висина (m), која се утврђује на следећи начин:`
    p2.textContent = '1. h = h1, ако се вредности h1, h2 и hs међусобно разликују за мање од 50 m;'
    p3.textContent = ` 2. h = h2, ако је разлика између h1 и h2 већа од 50 m, а разлика између hs и h2 мања од
        50 m; `
    p4.textContent = `3. h = h3 = h2 ± n*50, ако је разлика између hs и h2 већа од 50 m`
    div.append(p1, p2, p3, p4)


})