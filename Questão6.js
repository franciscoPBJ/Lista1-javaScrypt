var number1 = Number.parseInt(window.prompt('informe um numero'));
var number2 = Number.parseInt(window.prompt('informe um numero'));

var soma = number1 + number2;
var mult = number1*number2;
var divisao = number1/number2;
var resto =  number1%number2;

document.write('Operação    '+'     valor' + '<br>');
document.write(number1 + '  +  ' + number2 + ' = ' + soma + '<br>');
document.write(number1 + '  *  ' + number2 + ' = ' + mult + '<br>');
document.write(number1 + ' / ' + number2 + ' = ' + divisao + '<br>');
document.write(number1 + ' % ' + number2 + ' = ' + resto + '<br>');

