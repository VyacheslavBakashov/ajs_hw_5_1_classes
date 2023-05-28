const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length <= 10 && name.length >= 2) {
      this.name = name;
    } else {
      throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неправильный тип');
    }
    this.health = 100;
    this.level = 1;
  }
}
