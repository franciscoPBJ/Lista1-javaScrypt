var frase = window.prompt('Escreva uma frase:');
    var nome = window.prompt('Escreva a palavra que deseja buscar na frase:');
    var buscarNome= new RegExp(nome , 'gi' );

    var quantidade =  (frase.match(buscarNome));

    document.write(`a palavra ${nome} aparece ${quantidade.length} vezes na frase`);