const L = [1, 2, 3];

let addNum = (str) => (num) => (item, index) => {
  console.log(`${str} ${index}`);
  return item + num;
}

let sum = (acc: number, item: number): number => acc + item;

const L1: number = L.map(addNum('Hello')(10)).reduce(sum, 'sdf');

console.log(L1)