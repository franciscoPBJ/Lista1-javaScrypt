var grausC = Number.parseFloat(window.prompt('informe a temperatura em celsius:'));

var tempFarenheit = grausC*1.8 + 32;

if(grausC < 10){
    window.alert(`faz ${tempFarenheit} graus farenheit`);
    document.write('muito frio');
}
if(grausC <= 15){
    window.alert(`faz ${tempFarenheit} graus farenheit`);
    document.write('frio');
}
if(grausC <= 22){
    window.alert(`faz ${tempFarenheit} graus farenheit`);
    document.write('normal');
}
if(grausC <=30){
    window.alert(`faz ${tempFarenheit} graus farenheit`);
    document.write('quente');
}