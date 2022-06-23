// 进入类型世界： 理解原始类型与对象

// 原始类型和标注
// const name1: string = 'linbudu';
// const age: number = 24;
// const male: boolean = false;
// const undef: undefined = undefined;
// const nul: null = null;
// const obj: object = { name1, age, male };
// const bigintVar1: bigint = 9007199254740991n;
// const bigintVar2: bigint = BigInt(9007199254740991);
// const symbolVar: symbol = Symbol('unique');

// void
function func1() {}

function func2() {
  return;
}

function func3() {
  return undefined;
}

// 数组
const arr1: string[] = [];
const arr2: Array<string> = [];

// 元组
const arr3: string[] = ['lin', 'bu', 'du'];
console.log(arr3[599]); // 越界了

const arr4: [string, string, string] = ['lin', 'bu', 'du'];
// console.log(arr4[599]) // uple type '[string, string, string]' of length '3' has no element at index '599'.

// 合法边界
const arr5: [string, number, boolean] = ['linbudu', 599, true];

// 可选
const arr6: [string, number?, boolean?] = ['linbudu'];
type TupleLength = typeof arr6.length;

// 具名元组
const arr7: [name: string, age: number, male: boolean] = ['linbudu', 599, true];

// 具名可选元组
const arr8: [name: string, age: number, male?: boolean] = ['linbudu', 599];
type Length = typeof arr8.length;

// 隐式越界
const arr9: string[] = [];
const [ele1, ele2, ...rest] = arr9;

// 元组解决隐式越界
const arr10: [string, number, boolean] = ['linbudu', 599, true];
// const [name1, age, male, other] = arr10; // uple type '[string, number, boolean]' of length '3' has no element at index '3'.

// 对象

// 接口
interface IDescription {
  name: string;
  age: number;
  male: boolean;
}

const obj1: IDescription = {
  name: 'linbudu',
  age: 333,
  male: false,
};

// 修饰接口属性
interface IDescriptionOne {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescriptionOne = {
  name: 'linbudu',
  age: 599,
  male: true,
  // 无需实现 func 也是合法的
};

// 不影响赋值
obj2.male = false;
obj2.func = () => {};

// 只读
interface IDescriptionTwo {
  readonly name: string;
  age: number;
}

const obj3: IDescriptionTwo = {
  name: 'linbudu',
  age: 599,
};

// obj3.name = 'nihao' // Cannot assign to 'name' because it is a read-only property

// type 和 interface
// 更推荐的方式是，interface 用来描述对象、类的结构，
// 类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型。

// object 、Object、{}

// Object 包含了所有的类型
// 在任何情况下，你都不应该使用这些装箱类型。
// object 的引入就是为了解决对 Object 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型

// // X
// const tmp25: {} = undefined;
// // X
// const tmp26: {} = null;
// // X
// const tmp27: {} = void 0;
// const tmp28: {} = 'linbudu';
// const tmp29: {} = 599;
// const tmp30: {} = { name: 'linbudu' };
// const tmp31: {} = () => {};
// const tmp32: {} = [];

// 虽然能够将其作为变量的类型，但你实际上无法对这个变量进行任何赋值操作：
const tmp30: {} = { name: 'linbudu' };
// tmp30.age = 18; // // Property 'age' does not exist on type '{}'

// 总结： Object、object 以及{}
// 1. 在任何时候都不要，不要，不要使用 Object 以及类似的装箱类型。
// 2. 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。但我更推荐进一步区分，也就是使用 Record<string, unknown> 或 Record<string, any> 表示对象，unknown[] 或 any[] 表示数组，(...args: any[]) => any表示函数这样。
// 3. 我们同样要避免使用{}。{}意味着任何非 null / undefined 的值，从这个层面上看，使用它和使用 any 一样恶劣。

// Symbol

// const uniqueSymbolFoo: unique symbol = Symbol('你好呀')

// 类型不兼容
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo // Type 'typeof uniqueSymbolFoo' is not assignable to type 'typeof uniqueSymbolBar'

// 引用已创建的 unique symbol 类型
// declare const uniqueSymbolFoo: unique symbol;
// const uniqueSymbolBar: typeof uniqueSymbolFoo = uniqueSymbolFoo
