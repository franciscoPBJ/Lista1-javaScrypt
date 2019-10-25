var numeroFuncionario = Number.parseFloat(window.prompt('informe o numero do funcionário'));
var Horas_trabalhadas = Number.parseFloat(window.prompt('informe a quantidade horas trabalhadas mensais'));
var valorHora = Number.parseFloat(window.prompt('valor da hora'));
var filhos= Number.parseInt(window.prompt('Informe a quantidade de filhos menores de 14 anos:'));

var salario = Horas_trabalhadas*valorHora;
var acrescimo = salario*filhos*0.1;
var salario_final = salario + acrescimo;

window.alert(`o funcionário número ${numeroFuncionario} que trabalha ${Horas_trabalhadas} horas mensais com o valor por hora ${valorHora} recebe ${salario_final}`);