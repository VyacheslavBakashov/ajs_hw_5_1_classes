import Character from '../Character';

const nameError = 'Имя должно быть строкой длиной от 2 до 10 символов';
const typeError = 'Неправильный тип';

const forTest = [
  [['n', 'Bowman'], nameError],
  [[1, 'Bowman'], nameError],
  [['new', 'Boman'], typeError],
];

test.each(forTest)(
  'check Character errors',

  (obj, res) => {
    function checkErrorName() {
      return new Character(...obj);
    }
    expect(checkErrorName).toThrow(new Error(res));
  },
);
