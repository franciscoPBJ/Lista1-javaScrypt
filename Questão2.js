var nome = window.prompt("informe seu nome");
var salario = Number.parseFloat(window.prompt('informe o salário:'));

salario = salario*1.1;

window.alert(`o funcionario ${nome} recebe ${salario} de salário`);