
## react生命周期
constructor(构造函数)
componentWillMount(模块渲染前)
render(渲染)
componentDidMount(模块渲染后)
componentWillUpdate(模块更新)
componentDidUpdate(模块更新结束)
shouldComponentUpdate(判断模块是否需要重新渲染)
componentWillUnmount(组件卸载)


## vue生命周期
beforeCreate(创建前)data和methods中的数据还没有初始化
created(创建后)data和methods已经好了
beforeMount(载入前)模块在内存中编译好了，还未载入到页面中
render(渲染)
mounted(载入后)页面和内存中都是最新的数据，可以操作dom了
beforeUpdate(更新前)
updated(更新后)
destroyed(销毁后)

## react原理
https://github.com/neroneroffy/react-source-code-debug

## 事件循环
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop


## 当浏览器地址栏输入URL并回车后，发生了什么？
1. 根据网址进行DNS解析，将相应的域名解析为IP地址
2. 客户端根据IP地址去寻找对应的服务器并进行TCP三次握手，建立TCP连接
3. 客户端发起HTTP请求，请求对应资源
4. 服务器响应并返回相应数据（如：HTML文件）
5. 浏览器将获取的HTML文档由HTML解析器解析成DOM树
6. 同时由CSS解析器将CSS样式解析成CSS Rule Tree（CSS规则树）
7. 将生成的DOM树和CSS规则树合并生成Rendering Tree(渲染树)
8. 根据渲染树，在屏幕上对元素进行布局
9. 根据渲染树，将各个元素绘制到屏幕上
10. 客户端与服务器进行TCP的四次挥手