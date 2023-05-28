import Magician from '../Magician';

test('check Magician', () => {
  const input = new Magician('new', 'Magician');
  const result = {
    name: 'new',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(input).toEqual(result);
});
