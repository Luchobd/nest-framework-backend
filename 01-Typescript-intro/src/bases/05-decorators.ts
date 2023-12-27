class NewPokemon {
  constructor(public readonly id: number, public readonly name: string) {}

  scream() {
    console.log(`No Quiero!!`);
  }

  speak() {
    console.log(`No quiero hablar!!`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    // console.log(target);
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public readonly name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();
