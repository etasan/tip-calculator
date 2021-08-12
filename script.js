const bahsisOrani = document.querySelectorAll(".selection_button button");
const hesap = document.querySelector(".bill_input");
const kisiSayisi = document.querySelector(".people_input");
const bahsisOraniVeri = document.querySelector(".selection_input");
const ciktiBahsis = document.querySelector(".tipAmount_number p");
const ciktiToplam = document.querySelector(".total_number p");
const sifirlaButonu = document.querySelector(".output_button button");

let percent = '';
let bill = '';
let person = '';

function getPercent(){
    bahsisOraniVeri.value = '';
    percent = this.value;
    computeTip();
}

function getPercentData(){
    percent = this.value;
    computeTip();
}

(Array.from(bahsisOrani)).forEach(a => a.addEventListener('click', getPercent));
bahsisOraniVeri.addEventListener('keyup', getPercentData);
bahsisOraniVeri.addEventListener('change', getPercentData);

function billCount() {
    bill = this.value;
    computeTip();
}

hesap.addEventListener('keyup', billCount);
hesap.addEventListener('change', billCount);

function personCount() {
    person = this.value;
    computeTip();
}

kisiSayisi.addEventListener('keyup', personCount);
kisiSayisi.addEventListener('change', personCount);

function computeTip() {
    tipSum = (((parseInt(bill) * parseInt(percent)) / 100) + parseInt(bill)) / parseInt(person);
    tipSumRounded = (Math.round(tipSum * 100) / 100).toFixed(2);
    tip = ((parseInt(bill) * parseInt(percent)) / 100) / parseInt(person);
    tipRounded = (Math.round(tip * 100) / 100).toFixed(2);
    function checkNumber() {
    if(isNaN(tipSumRounded)) {
        ciktiToplam.innerHTML = `<span>&#8378</span>0.00`;
    } else {
        ciktiToplam.innerHTML = `<span>&#8378</span>${tipSumRounded}`;
    };
    if(isNaN(tipRounded)) {
        ciktiBahsis.innerHTML = `<span>&#8378</span>0.00`;
    } else {
        ciktiBahsis.innerHTML = `<span>&#8378</span>${tipRounded}`;
    }};
    checkNumber();
    console.log(tipRounded);
    console.log(tipSumRounded);
}

function sifirla() {
    kisiSayisi.value = '';
    bahsisOraniVeri.value = '';
    bahsisOrani.value = '';
    hesap.value = '';
    percent.value = '';
    bill.value = '';
    person = '';
    computeTip();
}

sifirlaButonu.addEventListener('click', sifirla);