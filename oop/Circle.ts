interface ICircl {
  readonly _id: number;
  x: number;
  y: number;
}

export class Circl {
  public readonly _id: number;
  public x: number;
  public y: number;

  constructor(public data: Partial<Circl> = {}) {
    this._id = data._id;
    this.x = data.x;
    this.y = data.y;
  }
}

const c = new Circl({})
console.log(c.x);
