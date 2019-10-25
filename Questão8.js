var salario = Number.parseFloat(window.prompt('informe o salario:'));

if(salario <= 280){
    salario = salario*1.2;
    window.alert(`o salario é: ${salario}`);
}
if(salario <= 700){
    salario = salario*1.15;
    window.alert(`o salario é: ${salario}`);
}
if(salario <= 1500){
    salario = salario*1.1;
    window.alert(`o salario é: ${salario}`);

}
else{
    salario = salario*1.05;
    window.alert(`o salario é: ${salario}`);
}