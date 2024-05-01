var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
const btnDiv = document.getElementById('div');
const btnMulti = document.getElementById('multi');
const btnSub = document.getElementById('sub');
const btnSom = document.getElementById('adi');

// Eventos com teclas
document.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        btnSom.click();
    }
});
document.addEventListener("keyup", function(e) {
    if (e.shiftKey && e.key === "Enter") {
        e.preventDefault();
        btnSub.click();
    }
});
document.addEventListener("keyup", function(e) {
    if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        btnDiv.click();
    }
});
document.addEventListener("keyup", function(e) {
    if (e.altKey && e.key === "Enter") {
        e.preventDefault();
        btnMulti.click();
    }
});

// Funções das operações
btnDiv.addEventListener('click' ,function (){
    var valor1 = n1.value
    var valor2 = n2.value

    if(valor2 === "0"){
        document.querySelector("#result").innerText = "Eu te amo!"
    }else{
        if (valor1 === "", valor2 ===""){
            document.getElementById('result').innerText = "";
            alert("Escreva algum número nos campos!")
        }else{
            var div = parseFloat(valor1) / parseFloat(valor2);
            document.getElementById('result').innerText = div;
        }}
});
btnMulti.addEventListener('click' ,function (){
    var valor1 = n1.value
    var valor2 = n2.value

    if(valor1 === "", valor2 === ""){
        document.querySelector('#result').innerText = ""
        alert("Escreva algum número nos campos!")
    }else{
        var multi = parseFloat(valor1) * parseFloat(valor2);
        document.getElementById('result').innerText = multi;
    }

});
btnSub.addEventListener('click' ,function (){
    var valor1 = n1.value
    var valor2 = n2.value

    if(valor1 === "", valor2 === ""){
        document.querySelector('#result').innerText = ""
        alert("Escreva algum número nos campos!")
    }else{
        var sub = parseFloat(valor1) - parseFloat(valor2);
        document.getElementById('result').innerText = sub; 
    }
});
btnSom.addEventListener('click' ,function (){
    var valor1 = n1.value
    var valor2 = n2.value

    if(valor1 === "", valor2 === ""){
        document.querySelector('#result').innerText = ""
        alert("Escreva algum número nos campos!")
    }else{
        var soma = parseFloat(valor1) + parseFloat(valor2);
        document.getElementById('result').innerText = soma; 
    }
});


var botao = document.querySelector('#comandos1');
var texto = document.querySelector('.texto');

botao.addEventListener('mouseover', function(){
    botao.style.display = "none";
    texto.style.display = "block";
})
texto.addEventListener('mouseleave', function(){
    botao.style.display = "block";
    texto.style.display = "none";
})
