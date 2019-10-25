var numero = 10;
var cont;
var k = 0;
var soma = 0;
var n = 0;
while(n < numero){
    var valor = Number.parseInt(window.prompt('informe um numero inteiro positivo'));

    for( cont=1; cont<=valor; cont++){
        if(valor%cont == 0){
            k++;
        }
    }
    if(k==2){
        soma = soma + valor;
    }
    n++;
    k=0;
}
window.alert(`o valor da soma dos números primos é: ${soma}`);