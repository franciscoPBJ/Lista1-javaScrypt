var cont = 0;
var soma = 0;
for(var j = 1; j <= 3; j++){
    var nota = Number.parseFloat(window.prompt("informe um numero inteiro:"));
    soma = soma + nota;
    cont++;
}
var media = soma/cont;

window.alert('A média da turma é: ' + media);