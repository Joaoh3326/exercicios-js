(function() {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    // ?
    var person = {
        name: 'João',
        lastname: 'Henrique',
        age: 21
    };
    console.log( 'Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    // ?
    console.log( Object.keys( person ) );

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    // ?
    console.log( '\nLista de livros:' );
    books.push({ name: 'Javascript Ninja', pages: 500 });
    books.push({ name: 'GraphQL', pages: 250 });
    books.push({ name: 'React', pages: 150 });
    /*
    Mostre no console todos os livros.
    */
    function allElements( arr ) {
        for(var i = 0; i < arr.length; i++ ) {
            console.log( arr[i] );
        }
    }

    allElements( books );
    
    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log( books.pop() );

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    allElements( books );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log( '\nLivros em formato string:' );
    for (var i = 0; i < books.length; i++ ) {
        books[i] = JSON.stringify( books[i] );
    }

    /*
    Mostre os livros nesse formato no console:
    */
    allElements( books );

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log( '\nAgora os livros são objetos novamente:' );
    for (var i = 0; i < books.length; i++ ) {
        books[i] = JSON.parse( books[i] );
    }
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var i = 0; i < books.length; i++) {
        for( var prop in books[i] ) {
            console.log( prop + ': ' + books[i][prop] );
        }
    }
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    console.log( '\nMeu nome é:' );
    var myName = [ 'j', 'o', 'a', 'o', 'h', 'e', 'n', 'r', 'i', 'q', 'u', 'e' ];
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // ?
    console.log( myName.join('') );
    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?
    console.log( myName.reverse() );
    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log( myName.sort() );

})();