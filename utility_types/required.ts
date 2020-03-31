interface A {
  a?: number;
  b?: string;
}


const obj2: Required<A> = {
  a: 234,
  b: 'sadf',
}