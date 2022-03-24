// 1
function identity<T>(arg: T): T {
  return arg;
}
// const output1 = identity<string>("myString");
// const output2 = identity<number>(123);
// console.log("res===", output1, output2);

// 2
// function identity2<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length); // Array has a .length, so no more error
//   return arg;
// }

// 3 泛型类型,附带默认值
// const myIdentity: <T>(arg: T) => T = identity;
// console.log(myIdentity<string>('123'))

// 4 泛型接口
// interface GenericIdentityFn {
//   <T>(arg: T): T;
// }
// let myIdentity2: GenericIdentityFn = identity;
// console.log(myIdentity2('abvc'))

// 5 泛型类
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };

// 6 泛型约束 1
// interface Lengthwise {
//   length: number;
// }
// // 这样类型T中都存在属性length
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }
// // // loggingIdentity(3);  // Error, number doesn't have a .length property
// loggingIdentity({length: 10, value: 3});
// loggingIdentity([1,23])
// // 泛型约束 2
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 7 泛型类类型
class BeeKeeper {
  hasMask: boolean;
  constructor() {
    this.hasMask = false;
  }
}

class ZooKeeper {
  nametag: string;
  constructor() {
    this.nametag = "nametag";
  }
}
// new () => T,{new(): T }
function create1<T>(c: {new(): T }): T {
  return new c();
}
function create2<T>(c: new () => T): T {
  return new c();
}
function create3<T>(c: new () => T) {
  return c;
}
const c1 = create1<BeeKeeper>(BeeKeeper)
const c2= create2<BeeKeeper>(BeeKeeper)
const c3= create3<BeeKeeper>(BeeKeeper)
console.log(c1)
console.log(c2)
console.log(c3)

// eg：泛型类类型
// class Animal {
//   num: number;
// }
// class Bee extends Animal {
//   keeper: BeeKeeper;
//   constructor() {
//     super()
//     this.keeper = new BeeKeeper();
//   }
// }
// class Lion extends Animal {
//   keeper: ZooKeeper;
//   constructor() {
//     super()
//     this.keeper = new ZooKeeper();
//     this.num = 10
//   }
// }
// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c();
// }
// let lion = createInstance(Lion);
// console.log(lion);
// let bee = createInstance(Bee)
// console.log(bee);

