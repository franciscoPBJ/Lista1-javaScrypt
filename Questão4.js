var preco = Number.parseFloat(window.prompt('informe o preço do produto:'));
var parcela = Number.parseInt(window.prompt('informe a quantida de parcelas'));
var precoTotal;

if(parcela == 1){
    window.alert('preço de a vista');
}
if(parcela == 2){
    precoTotal = preco*1.05;
    window.alert(`o preco total é ${precoTotal}`);
}
if(parcela == 3){
    precoTotal =  preco*1.1;
    window.alert(`o preco total é ${precoTotal}`);
}
if(parcela == 4){
    precoTotal = preco*1.15;
    window.alert(`o preco total é ${precoTotal}`);
}
if(parcela == 5){
    precoTotal = preco*1.2;
    window.alert(`o preco total é ${precoTotal}`);
}