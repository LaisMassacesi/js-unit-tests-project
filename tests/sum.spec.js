const sum = require('../src/sum');

describe(('Verificações da função soma'),() => {
  it('Verifica se a função sum existe', () => {
    expect(typeof sum).toEqual('object');
  });
  it('Verifica se a função recebe dois parametros', () => {
    expect(sum(a, b))
  });
});