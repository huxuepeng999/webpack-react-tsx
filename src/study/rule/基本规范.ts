// 字面量体现不出来的属性要有注释：
// 声明注释
// const res: string

// 方法注释：
/**
 * 更新位置
 * @param pos 经纬度
 * @param reportTime 服务端时间
 */
const updateLocation = async (locaton: string, reportTime?: number) => {
  
}

//名称尽量用全拼，例如
// updateLocation 不可以写updateL等

//文件名称统一小写，类名称统一大些


//解析尽量用解构，注意防空
const animal = {
    a: 'a',
    b: 'b'
}
const {a,b}=animal
console.log(a,b)

// if和switch
// 嵌套层数过多用switch效率更高，而不是用if


// for in，for of只能遍历对象，不可以遍历数组
// 遍历数组优先用map，reduce，filter等
// 或者for (let i = 0; i < datas.length; i++) {}


// 代码异常处理一般都要有，promise和async await例子，
// 该抛出错误时要写throw
function promise1() {
    return new Promise((resolve,reject) => {
      resolve('abc')
    })
    // .then((result)=>{
    //   return result
    // }).catch((error)=>{
    //   return error
    // })
}
const getDevicePosition = async () => {
  try {
    const res1 = await promise1();
    console.log('res===2',res1)
  } catch (error) {
    console.log('res===2 error',error)
  }
};
getDevicePosition()



// 可选类型Partial<Type>， Required<Type>必选类型，和Partial相反
interface Todo {
  title: string;
  description: string;
}
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});


// 对象声明Record<Keys,Type>
interface CatInfo {
  age: number;
  breed: string;
  // ob: Record<string, string | boolean>;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};