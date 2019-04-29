(function () {
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
  const person = {
    name: 'Alexandre',
    lastname: 'Morais',
    age: 24
  }
  console.log('Propriedades de "person":');

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  let books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({
    name: 'O Rei de Amarelo',
    pages: 253
  }, {
    name: 'Hollywood',
    pages: 235
  }, {
    name: 'Contos De Dostoievski',
    pages: 263
  });
  console.log('\nLista de livros:');

  /*
  Mostre no console todos os livros.
  */
  console.log(books);

  console.log('\nLivro que está sendo removido:');
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());

  console.log('\nAgora sobraram somente os livros:');
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  books = JSON.stringify(books);
  console.log('\nLivros em formato string:');

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books);

  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse(books);
  console.log('\nAgora os livros são objetos novamente:');
  console.log(books + '\n');
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (let i = 0; i < books.length; i++) {
    for (const prop in books[i]) {
      console.log(prop + ': ' + books[i][prop]);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  let myName = ['A', 'l', 'e', 'x', 'a', 'n', 'd', 'r', 'e'];
  console.log('\nMeu nome é:');

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));

  console.log('\nMeu nome invertido é:');

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse().join(''));

  console.log('\nAgora em ordem alfabética:');
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort().join(''));
})();