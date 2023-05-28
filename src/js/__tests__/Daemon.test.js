import Daemon from '../Daemon';

test('check Daemon', () => {
  const input = new Daemon('new', 'Daemon');
  const result = {
    name: 'new',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(input).toEqual(result);
});
