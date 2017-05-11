# cookie
cookie 能永久存储不可超过4k的字符串在浏览器上，并且跟后台进行数据交互
只有手动删除或者过期，cookie才会丢失

1. 跟h5 新出现的localstorage相比：
- 优点：能请求中带过去给后台，并且后台也可以获取、操作该数据，然后再存储在浏览器上
- 缺点：cookie虽然比localstorage的存储空间小

2. 安全：
- cookie不仅能设置值，也能设置domain和path，能根据domain和path向下获取cookie；
- 后台可以设置cookie的http为true，那么客户端就不能读写该cookie；

3. 不同协议、不同子域、主域、路径的都不能获取该部分的cookie
- 🌰🌰🌰🌰
- domain的🌰
wap.yy.com和test.yy.com的能获取 .yy.com 的cookie
但是test.yy.com的不能获取wap.yy.com的

- path的🌰
/task/test 和 /task/hello能获取 /task的cookie
/task/test 不能获取 /task/hello的cookie


4. 设置值时注意：
- 值不能出现分号（;）
- 只要设置的path不为 ‘／’，就会设置成当前path
- 设置cookie domain不能设置成非当前页面的域名或者路径
- 当有name相同时，优先修改相同host的，除非指定非当前完整host的

