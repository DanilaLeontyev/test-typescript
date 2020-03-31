export type EUR = number & { readonly _tag: 'EUR' };

export function eur(value: number): EUR {
  return value as EUR;
}

export function addEuros(a: EUR, b: EUR): EUR {
  return (a + b) as EUR;
}

const result: EUR = addEuros(eur(1), eur(10)); // OK
const c = (eur(1) + eur(10)) as EUR

class Calc {
  sum = 0;
  plus(num) {
    this.sum += num;
    return this;
  }
  minus(num) {
    this.sum -= num;
    return this;
  }
}
let n = new Calc();
n.plus(3).minus(1); // 2