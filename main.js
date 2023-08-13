const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncre = document.getElementById('subhanAllahIncre');
const subhanAllahDecre = document.getElementById('subhanAllahDecre');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncre = document.getElementById('alhamdulillahIncre');
const alhamdulillahDecre = document.getElementById('alhamdulillahDecre');

const allahuakberDisplay = document.getElementById('allahuakberDisplay');
const allahuakberIncre = document.getElementById('allahuakberIncre');
const allahuakberDecre = document.getElementById('allahuakberDecre');

const resetTasbih = document.getElementById('resetTasbih');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuakberInitialValue = 0;


subhanAllahIncre.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        return alert("Subhan Allah Complete");
    }

    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

subhanAllahDecre.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert("You can't add Negative Value");
    }

    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})




alhamdulillahIncre.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
        return alert("Subhan Allah Complete");
    }

    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

alhamdulillahDecre.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert("You can't add Negative Value");
    }

    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})




allahuakberIncre.addEventListener('click', function () {
    if (allahuakberInitialValue === 33) {
        return alert("Subhan Allah Complete");
    }

    allahuakberInitialValue += 1;
    allahuakberDisplay.innerText = allahuakberInitialValue;
})

allahuakberDecre.addEventListener('click', function () {
    if (allahuakberInitialValue === 0) {
        return alert("You can't add Negative Value");
    }

    allahuakberInitialValue -= 1;
    allahuakberDisplay.innerText = allahuakberInitialValue;
})

resetTasbih.addEventListener('click', function(){
    alhamdulillahDisplay.innerText = 0;
    subhanAllahDisplay.innerText = 0;
    allahuakberDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    allahuakberInitialValue = 0;
    alhamdulillahInitialValue = 0;
})