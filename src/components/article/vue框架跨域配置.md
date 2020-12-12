## vue框架跨域配置

#### 在当前项目的根路径下新建一个文件,文件名是固定的 vue.config.js

#### 1，简单代理

```
//vue.config.js
module.exports = {
　　　　devServer: {
　　　　　　open: true,//打开默认浏览器
　　　　　　host: 'localhost',
　　　　　　port: 8080,
　　　　　　https: false,//忽略https
　　　　　　//以上的ip和端口是我们本机的;下面为需要跨域的
　　　　　　proxy: {  //配置跨域
　　　　　　　　'/api': {
　　　　　　　　　　target: 'http://mcenter.test.cbus/api-mcenter/tool',  //这里后台的地址模拟的;应该填写你们真实的后台接口
　　　　　　　　　　ws: true,//代理websocket
　　　　　　　　　　 secure: false,//忽略https
　　　　　　　　　　changOrigin: true,  //允许跨域
　　　　　　　　　　pathRewrite: {
　　　　　　　　　　　　'^/api': ''  //请求的时候使用这个api就可以
　　　　　　　　　　}，
　　　　　　　　　　 cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
　　　　　　}
　　　　}
　　}
}

实现讲解：将请求的URL：'http://localhost:8080/api-mcenter/tool/passport/login.html'中的http://localhost:8080代理为：'http://mcenter.test.cbus/api-mcenter/tool'
最终的请求地址为：'http://mcenter.test.cbus/api-mcenter/tool/api-mcenter/tool/passport/login.html'

```

#### 2，多环境代理

##### 	2-1，在vue.config.js同目录下新建.server.dev.js文件

```
//server.dev.js文件中

//yarn start dev          读取.server.dev.js文件中的default配置
//yarn start dev:test     读取.server.dev.js文件中的test配置，test覆盖default
//yarn start dev:uat      读取.server.dev.js文件中的uat配置，uat覆盖default
//yarn start pro:test     读取.server.pro.js文件中的配置。
module.exports = {
  default: {//默认配置，被使用到的其他配置会覆盖默认配置
    host: 'mcenter.me.cbus',
    port: 9002,
    proxy: {
      '/api-mcenter/tool': {//反向代理到真实服务
        target: 'http://mcenter.me.cbus:8501/api-mcenter/tool',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/api-mcenter/tool': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
      '/api-msg/stomp/websocket': {//反向代理到真实服务
        target: 'http://mcenter.me.cbus:8201',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        ws: true
      },
      '/fserver/files': {//反向代理到真实服务
        target: 'http://fserver.dev.cbus/fserver/files',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/fserver/files': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
      '/fserver': {//反向代理到真实服务
        target: 'http://fserver.dev.cbus/fserver',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/fserver': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
      '/mock-api': {//反向代理到本地mock服务,mock数据在mock文件夹中
        target: 'http://127.0.0.1:3333/mock-api',
        changeOrigin: true,
        pathRewrite: {'^/mock-api': ''}
      }
    }
  },
  test: {//若有与default不同的，会覆盖default的配置
    host: 'mcenter.me.cbus',
    port: 9002,
    proxy: {
      '/api-mcenter/tool': {//反向代理到真实服务
        target: 'http://mcenter.test.cbus/api-mcenter/tool',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/api-mcenter/tool': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
      '/api-msg/stomp/websocket': {//反向代理到真实服务
        target: 'http://mcenter.test.cbus',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        ws: true
      },
      '/fserver/files': {//反向代理到真实服务
        target: 'http://mcenter.test.cbus/fserver/files',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/fserver/files': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
      '/fserver': {//反向代理到真实服务
        target: 'http://mcenter.test.cbus/fserver',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/fserver': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
    }
  },
  uat: {//若有与default不同的，会覆盖default的配置
    host: 'mcenter.me.cbus',
    port: 9002,
    proxy: {
      '/api-mcenter/tool': {//反向代理到真实服务
        target: 'http://mcenter.uat.cbus/api-mcenter/tool',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/api-mcenter/tool': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
      '/api-msg/stomp/websocket': {//反向代理到真实服务
        target: 'http://mcenter.uat.cbus',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        ws: true
      },
      '/fserver/files': {//反向代理到真实服务
        target: 'http://mcenter.uat.cbus/fserver/files',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/fserver/files': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
      '/fserver': {//反向代理到真实服务
        target: 'http://mcenter.uat.cbus/fserver',
        secure: false,//忽略https
        changeOrigin: true,//解决跨域
        pathRewrite: {'^/fserver': ''},
        cookieDomainRewrite: 'mcenter.me.cbus',//修改cookie的host作用域
      },
    }
  }
}

```

##### 	2-2，在package.json文件中修改启动命令

```
//package.json文件中
"scripts": {
    "start": "vue-cli-service --env",//添加了尾部的 --env
    "serve": "uni-serve --env",//添加了尾部的 --env
    }
```

##### 	2-3，修改vue.config.js内容

```
//vue.config.js文件中

const path = require('path')//引入node path模块
const process = require('process')//引入node process模块
const rawArgv = process.argv.slice(2)//可以获取到 '--env',和启动命令传入的参数'dev:test'
const args = require('minimist')(rawArgv, {})
let serverConfig = getServerConfig(process.cwd(), args.env)//获取到的配置文件内容
function getServerConfig(dir, envArg) {//参数为 文件的绝对地址，'dev:test'
  if ('undefined' === envArg || undefined === envArg) {
    return {//如果没有传入启动参数，则启动默认配置
      host: 'localhost',
      port: '8080',
      proxy: {}
    };
  }
  if ((!envArg && typeof envArg === "boolean")) {//如果启动参数不存在或类型不对时，报错打印信息
    console.log('\x1B[31m未指定环境变量参数模式\x1B[0m');
    process.exit(1);
    return;
  }
  if ((envArg && typeof envArg === "boolean") || 'undefined' === envArg) {//如果启动参数存时 类型不对或undefined，报错打印信息
    console.log('\x1B[31m未指定环境变量参数,执行命令如： yarn start dev 或者 yarn start dev:test!!\x1B[0m');
    console.log('\x1B[32m启动命令如: yarn start dev 或 yarn start dev:tes' +
      't\x1B[0m');
    console.log('\x1B[33m如果没有配置，可以执行命令来创建：yarn soul env dev 或 yarn soul env pro\x1B[0m');
    process.exit(1);
    return;
  }
  try {//解析启动参数，查找配置文件，获取配置内容
    let env = envArg.split(":")[0];
    let key = envArg.split(":")[1];
    const projectConfigFile = path.resolve(dir, '.server.' + env + '.js');
    const projectConfig = require(projectConfigFile)
    let envConfig = projectConfig.default;
    if (key) {
      let config = projectConfig[key];
      if (!config) {
        console.log('\x1B[31m------------.server.' + env + '.js未找到[' + key + ']的配置信息-------\x1B[0m');
        console.log('\x1B[32m请在.server.' + env + '.js中添加[' + key + ']的配置信息\x1B[0m');
        process.exit(1);
      }
      if (envConfig) {
        envConfig = Object.assign({}, envConfig, config);
      } else {
        envConfig = config;
      }
    }
    console.log("\x1B[33m加载环境变量配置:");
    return envConfig;
  } catch (err) {
    console.log('\x1B[31m加载环境配置文件失败！\x1B[0m', err.message);
    console.log('\x1B[32m可以执行命令来创建：yarn soul env ' + env + '\x1B[0m')
    process.exit(1);
  }
}

module.exports = {
  publicPath: '/mcenter/tool',
  devServer: {
    host: serverConfig.host,
    port: serverConfig.port,
    proxy: serverConfig.proxy
  },
  transpileDependencies: ['luch-request', 'uview-ui'],//babe编译需要转成es5属性的依赖包
}

```

#### 阶段总结

1，跨域是为了解决“同源策略”，即“协议，域名，端口”统一

2，需要跟后端确认好请求条件，设置好Heders内容