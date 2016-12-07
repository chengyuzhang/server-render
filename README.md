# server-render
===============
server render test
___________________

这是一个react结合redux来进行服务端渲染的例子。

###开发模式有两种:
######1.npm run dev
这是用webpack自带的webpack-dev-server的服务器来进行开发，这种开发模式下的好处是less文件不用打包进bundle.js里就可以热更新style<br/>
######2.num start
这是用webpack结合node服务器来进行开发，缺点就是less文件必须打包进bundle.js里才可以热更新style<br/>

###打包方法：
######1.npm run build
打包在dist目录下，此目录下有个server.js文件，这是运行打包后正式上线的服务器文件。当然这只是测试文件，所以写的很简单。<br/>

###打包后运行方法
######1.npm run run
这个就是用到了dist目录下的server.js来运行的了<br/>

