const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  // fail('Teste vazio!');
  // ESCREVA SEUS TESTES ABAIXO:
  // Teste se productDetails é uma função.
  it('Verifica se productDetails é uma função', () => {
  expect(typeof productDetails).toBe('function');
  })
  // Teste se o retorno da função é um array.
  it('Verifica se o retorno da função é um array', () => {
  expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object')
  })
  // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
  expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
  })
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
  expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
  expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  })
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
  expect(productDetails('Alcool gel', 'Máscara')[0]).not.toBe(productDetails('Alcool gel', 'Máscara')[1]);
  expect(productDetails('Alcool gel', 'Máscara')).not.toBe(productDetails('Alcool gel', 'Alcool gel'));
  expect(productDetails('Alcool gel', 'Máscara')).not.toBe(productDetails('Máscara', 'Máscara'));
  })
  // Teste se os dois productIds terminam com 123.
  it('Verifica se os dois productIds terminam com 123.', () => {
  expect(productDetails('Alcool gel', 'Máscara')[0]).toHaveProperty('details.productId', 'Alcool gel123');
  expect(productDetails('Alcool gel', 'Máscara')[1]).toHaveProperty('details.productId', 'Máscara123');
  })
  // });
 });
