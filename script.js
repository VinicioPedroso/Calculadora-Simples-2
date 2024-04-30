var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
const btnDiv = document.getElementById('div');
const btnMulti = document.getElementById('multi');
const btnSub = document.getElementById('sub');
const btnSom = document.getElementById('adi');

// Eventos com teclas
document.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        btnSom.click();
    }
});
document.addEventListener("keyup", function(e) {
    if (e.shiftKey && e.keyCode === 13) {
        e.preventDefault();
        btnSub.click();
    }
});
document.addEventListener("keyup", function(e) {
    if (e.ctrlKey && e.keyCode === 13) {
        e.preventDefault();
        btnDiv.click();
    }
});
document.addEventListener("keyup", function(e) {
    if (e.altKey && e.keyCode === 13) {
        e.preventDefault();
        btnMulti.click();
    }
});

// Funções das operações
btnDiv.addEventListener('click' ,function (){
    var div = parseFloat(n1.value) / parseFloat(n2.value);
    document.getElementById('result').innerText = div;
});
btnMulti.addEventListener('click' ,function (){
    var multi = parseFloat(n1.value) * parseFloat(n2.value);
    document.getElementById('result').innerText = multi;
});
btnSub.addEventListener('click' ,function (){
    var sub = parseFloat(n1.value) - parseFloat(n2.value);
    document.getElementById('result').innerText = sub;
});
btnSom.addEventListener('click' ,function (){
    var soma = parseFloat(n1.value) + parseFloat(n2.value);
    document.getElementById('result').innerText = soma;
});