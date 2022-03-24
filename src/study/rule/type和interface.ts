// type和interface建议首字母大写
// interface建议使用大写字母I开头

// 相同点
// 都可以描述一个对象或者函数
interface IUser {
 name: string
}
type TUser = {
 name: string
};


// 都可以扩展
interface IHomeUser extends IUser { 
 age: number; 
}

type HomeUser = User & { age: number };

// 不同点
// type 可以而 interface 不行
// 基本类型别名
type Name = string
// 联合类型
interface Dog {
 d: string;
}
interface Cat {
 c: string;
}
type Pet = Dog | Cat
// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
// type 语句中还可以使用 typeof 获取实例的 类型进行赋值
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div

// interface 可以而 type 不行
interface User {
 name: string
 age: number
}
interface User {
 sex: string
}
/*
User 接口为 {
 name: string
 age: number
 sex: string 
}
*/

