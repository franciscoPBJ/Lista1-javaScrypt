var num1 = Number.parseFloat(window.prompt('informe um valor'));
var num2 = Number.parseFloat(window.prompt('informe outro valor'));

var codigo = Number.parseInt(window.prompt('informe o numero a ser escolhido'));

switch(codigo){
    case 1 : 
    var soma = num1 + num2;
    window.alert(`o valor da soma é ${soma}`);
    break

    case 2:
    var mult = num1*num2;
    window.alert(`o valor da multiplicação é ${mult}`);
    break

    case 3:
    var divisao = num1/num2;
    window.alert(`o valor da divisao é ${divisao}`);
    break

    default: window.alert('valor invalido');
}