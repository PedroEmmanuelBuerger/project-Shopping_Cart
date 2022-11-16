import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    const promiseAwaiting = fetch('')
    expect(fetchProductsList('computador')).toEqual(promiseAwaiting)
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const computadores = (await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador'))
    const array = await computadores.json();
    const result = await array.results
    expect(await fetchProductsList('computador')).toEqual(result)
  });

  // it('...', () => {
  // });
});
