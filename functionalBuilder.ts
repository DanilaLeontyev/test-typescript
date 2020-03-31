class Food {
  constructor(public ingredients: Array<string>) { }
}

const compose = <T, U, V>(f1: (arg: T) => U, f2: (arg: U) => V) => (arg: T) => f2(f1(arg));

const hasDoughCheeseAndToppings = (strs: string[]) => true;

const buildPizza = (ingredients: Array<string>) => {
  if (hasDoughCheeseAndToppings(ingredients)) { return new Food(ingredients) }
  else { throw new Error("You tried to build a pizza without enough ingredients"); }
}

const addCheese = ({ ingredients }: Food) => new Food([...ingredients, 'chesese'])
const addPotato = ({ ingredients }: Food) => new Food([...ingredients, 'tomato'])

const buildPizzaWithCheese = compose(buildPizza, addCheese);
const buildPizzaWithTomato = compose(buildPizza, addPotato)

console.log(buildPizzaWithCheese(['pizza with cheese']))
console.log(buildPizzaWithTomato(['pizza with tomato']))



interface Director {
  make: () => void;
}

interface Builder {
  reset: () => void;
  addCheese: () => void;
}

const createBuilder = (): Builder => {
  const reset = () => 'reset';
  const addCheese = () => 'add cheese';
  return {
    reset,
    addCheese
  }
}

const createDirector = (builder: Builder): Director => {
  const make = () => 'make some product';
  return {
    make
  }
}

const builder: Builder = createBuilder();
const director = createDirector(builder);
director.make();
builder.addCheese()
