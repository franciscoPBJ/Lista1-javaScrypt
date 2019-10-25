var primeiro_bimestre = parseFloat(prompt('Nota do primeiro bimestre:'));
var segundo_bimestre =  parseFloat(prompt('Nota do segundo bimestre:'));
var terceiro_bimestre = parseFloat(prompt('Nota do terceiro bimestre:'));
var quarto_bimestre =   parseFloat(prompt('Nota do quarto bimestre:'));

var media = (primeiro_bimestre + segundo_bimestre + terceiro_bimestre + quarto_bimestre)/4;

if( media < 7){
    var provaFinal = prompt('informe a nota da final');
    mediaFinal = (provaFinal + media)/2;
    document.write(`a media foi ${mediaFinal}`);
}
else{
    document.write(`a media foi ${media}`);
}
