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

let err1 = document.querySelector(".errVr");<!-- @format -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
    <title>Калкулатор потрошње Г - 4</title>
</head>

<body>
    <nav id="nav">
        <div class="line"></div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="http://www.srbijagas.com" target="blank"><img class="img" src="img/logo.png" alt="logo-srbijagas" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
                <div class="collapse navbar-collapse w-100" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">ПОЧЕТНА</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">О НАМА</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ПРОЈЕКТИ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ПОТРОШАЧИ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ОДРЖИВИ РАЗВОЈ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ПРЕС ЦЕНТАР</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ЈАВНЕ НАБАВКЕ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ЧЕСТА ПИТАЊА</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ПЛАН ЈАВНИХ НАБАВКИ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">КОНТАКТ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </nav>

    <a href="index.html"><button>Пређите на калкулатор за комерцијална мерила &lt; Г-10</button></a>
    <a href="svedene.html"><button>Пређите на калкулатор сведених количина</button></a>

    <div class="container mt-2 mb-2">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                    <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-primary py-2 text-white px-1 news">
                        <span class="d-flex align-items-center">&nbsp;Најновије вести</span
							>
						</div>
						<marquee
							class="news-scroll marquee"
							behavior="scroll"
							scrollamount="8"
							direction="left"
							loop="infinite"
							onmouseover="this.stop();"
							onmouseout="this.start();"
						>
							<a
								href="https://www.srbijagas.com/wp-content/uploads/2021/10/2019.07.05.-Cena-gasa-08.10.2021..pdf"
								target="blank"
								class="text-secondary news"
								>Цена гаса за јавно снабдевање је 32,28 РСД/m³
							</a>
							<span class="dot">-</span>
                        <a href="https://www.srbijagas.com/?p=12416" target="blank" class="text-secondary news">Позив заинтересованим грађанима за увођење гасног прикључка по
								промотивним условима (до 36 рата)
							</a>
                        <span class="dot">-</span>
                        <a href="https://www.srbijagas.com/?p=13858" target="blank" class="text-secondary news">Пуштена у рад гасоводна инфраструктура у Белој Цркви
							</a>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>

        <div class="button text-center">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Начин рачунања у kWh
            </button>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <p>
                        О условима испоруке и обрачуну испорученог гаса можете да се информишете увидом у
                        <a href="https://www.aers.rs/FILES/PodzakonskiAkti/Precisceni/2012-04-21%20Uredba%20o%20uslovima%20za%20isporuku%20prirodnog%20gasa%20SG%2049-22.pdf" target="blank">Уредбу</a
                  >
                   о условима за испоруку природног гаса која је прописана од стране Агенције за енергетику Републике Србије од 16 - 24. стране
                  (АЕРС). (У даљем тексту Уредба)
                  <p>1. Измерена количина представља разлику претходног и
                    новоочитаног стања мерила за гас. Информацију о надморској висини
                    можете да пронађете на својој фактури или кликом на следећи <a href="https://www.transportgas-srbija.rs/sr/za-korisnike/gmrs-nadmorske-visine/" target="blank">линк</a>.</p>
                    <p>2. Летњи месеци обухватају период од априла до септембра, а зимски месеци обухватају период од октобра до марта.</p>
                    <p>3. Опцију "ДА" везано за температурни компензатор остављате уколико на фактури немате податак о температури. Уколико се мерило налази у унутрашњем простору изаберите опцију "ДА" невезано да ли је исто са или без температурног комензатора.</p>
                    <p>4. Коефицијент корекције одређује ОТС и можете да га видите на следећем <a href="https://www.transportgas-srbija.rs/sr/za-korisnike/koeficijent-korekcije-k/" target="blank">линку</a> или на претходној фактури.
                    </p>
                    <p>5. "GCV" представља горњу топлотну вредност гаса и при нормалним условима и израчунава се према SRPS EN ISO 6976 узимајући услове за запремину 0 °C и референтну температуру сагоревања од 25 °C и изражена је у kWh/m³. Више о горњој
                        топлотној вредности можете да се информишете путем <a href="https://www.aers.rs/FILES/PodzakonskiAkti/Precisceni/2012-04-21%20Uredba%20o%20uslovima%20za%20isporuku%20prirodnog%20gasa%20SG%2049-22.pdf" target="blank">Уредбе</a>.</p>
                    Калкулатор је намењен за самостално рачунање потрошње и као такав резултат рада није званична информација.
                    </p>
                </div>
            </div>
        </div>

        <form id="form">
            <main>
                <div class="mb-3">
                    <h2>Апликација за рачунање потрошње природног гаса у kWh за домаћинства (Г-4)</h2>
                    </br>

                    <hr class="hr" />
                    <div class="form-group">
                        <label for="vr">Измерена количина (у m³)</label>
                        <input type="number" class="form-control" id="vr" name="vr" placeholder="Унесите измерену количину" />
                        <small id="gmrs" class="form-text text-muted"> </small>
                    </div>
                    <div class="errVr"></div>
                    <div class="form-group">
                        <label for="pm">Улазни притисак (у bar)</label>
                        <input type="number" class="form-control" id="pm" name="pm" step="0.001" min="0" max="6" placeholder="0.022 za 22 mbar, 1.5 za 1.5 bar..." />
                    </div>
                    <div class="form-group">
                        <label for="h">Надморска висина (h)</label>
                        <input type="number" class="form-control" id="h" name="h" placeholder="Унесите надморску висину" />
                    </div>
                    <div class="errH"></div>

                    <div class="form-group">
                        <label for="ps">Притисак гаса у стандардном стању (у mbar)</label>
                        <input type="number" class="form-control" id="ps" name="ps" placeholder="1013.25" disabled />
                    </div>

                    <div class="form-group">
                        <label for="period">Период</label>
                        <select id="period" name="period">
						<option value="279.15">Зима</option>
						<option value="289.15">Лето</option>
					</select>
                    </div>
                    <div class="form-group">
                        <label for="ts">Температура гаса у стандардном стању (у K)</label>
                        <input type="number" class="form-control" id="ts" name="ts" placeholder="288.15" disabled />
                    </div>


                    <div class="form-group">
                        <label for="qkWh">Коефицијент К</label>
                        <input type="text" class="form-control" id="qkWh" name="qkWh" placeholder="Унесите коефицијент корекције" minlength="1" maxlength="8" />
                    </div>
                    <div class="errqkWh"></div>
                    <div class="form-group">
                        <label for="GCV">Горња топлотна вредност природног гаса: (GCV)</label>
                        <input type="text" class="form-control" id="GCV" name="GCV" placeholder="Унесите квалитет гаса" minlength="2" maxlength="9" />
                    </div>
                    <div class="errGCV"></div>
                    <div class="form-group">
                        <label for="protekla">Протекла количина: </label>
                        <div id="protekla"></div>
                    </div>
                    <div class="form-group">
                        <label for="normalna">Нормална количина: </label>
                        <div id="normalna"></div>
                    </div>

                    <button type="submit" id="btn" class="btn btn-primary">
					Израчунај
				</button>
                </div>
                <div id="rezultat" class="mb-3"></div>
            </main>
        </form>

        <p class="disclamer">Резултат рада калкулатора није званична информација</p>
        <p class="copyright">&#169; Србијагас 2022 | Сва права задржана</p>

        <script src="tpg.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>
let err2 = document.querySelector(".errH");
let err3 = document.querySelector(".errqkWh");
let err4 = document.querySelector(".errGCV");

//konstante

/* pm = 22;
 */
ps = 1013.25;
ts = 288.15;

//funkcija

const kWh = () => {
    //varijable i konstante

    let rezultat = document.querySelector("#rezultat");
    //unesena vrednost za prikljucni pritisak
    let pmMbar = Number(pm.value) * 1000;
    //atmosferski pritisak za zadatu visinu
    let patm = Number(1016 - (0.108 * h.value).toFixed(1));

    //apsolutni pritisak
    let pAbs = pmMbar + patm;

    let z = 1;
    let pmBarTotal = pAbs;

    if (pmBarTotal >= 1000 && pmBarTotal < 8000) {
        z = 1 / (1 + (0.003 * pmBarTotal) / 1000);
    }
    console.log("z = " + z);
    console.log("pmMbar = " + pmMbar);
    console.log("pAbs = " + pAbs);
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

    if (vr.value == "" || vr.value < 0 || vr.value > 100000) {
        err1.innerHTML =
            "Унос очитане количине мора да буде позитиван број и не већи од 100000";
        errRezultat();
        return;
    }

    if (h.value == "" || h.value < 0 || h.value > 1100) {
        err2.innerHTML =
            "Унос висине мора да буде позитиван број и не већи од 1100";
        errRezultat();
        return;
    }

    proteklaKolicina = Math.round(
        Number(vr.value) * (pAbs / Number(ps)) * (ts / period.value) * z,
    );
    protekla.textContent = Math.round(proteklaKolicina) + " m³";

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
    console.log("pm: " + pm.value);
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
