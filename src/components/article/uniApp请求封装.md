## uniApp请求封装

#### [官网地址][https://uniapp.dcloud.io/api/request/request]

#### 1，新建config.js文件，用于集中控制关键key

```
let config = {}
config.appBackBaseUrl = 'http://yt-richard.tpddns.cn:8090/driver'
config.appBackBaseWS = 'ws://yt-richard.tpddns.cn:8089'
//判断环境，以使用对应请求域名
config.url = process.env.NODE_ENV === 'development' && window != undefined ?
  'http://driver.me.bbus:9201' :
  process.env.NODE_ENV !== 'development' && window != undefined ? 'http://driver.test.bbus' :
    'http://yt-richard.tpddns.cn:8090';
export default config

```

#### 2，新建service.js文件，用于基础处理请求接口

```vue
import config from '@/config/index.js'//引入key

export default {//导出接口对象
  async get(params) {
    return await this.requests(params, 'GET');
    uni.showLoading({
      title: '请求加载中'
    })
  },
  async post(params) {
    uni.showLoading({
      title: '请求加载中'
    });
    return await this.requests(params, 'POST')
  },
  requests(params, type) {
    let url = config.url + params.url,
      method = type,
      header = params.header || {},
      data = params.data;
    method = method.toUpperCase();
    header['content-type'] = params.queryString ? 'application/x-www-form-urlencoded' : 'application/json';
    if (window == undefined) {//手机环境，抑制重复登录需添加cookie，pc端会自动添加cookie
      header.Cookie = uni.getStorageSync('Cookie')
    }
    return new Promise((ResultCode, err) => {
      uni.request({
        url,
        method,
        header,
        data,
        dataType: 'json',
        timeout: 5000,
        sslverify: false,
        success: res => {
          // console.log("res1: " + JSON.stringify(res));
          uni.hideLoading();
          if (typeof res === Boolean) {//返回response
            ResultCode(res)
          } else {
            ResultCode(res.data)
          }
          if (res['header']['Set-Cookie']) {//获取存储sid到cookie
            let str = JSON.stringify(res['header']['Set-Cookie']).replace(/SID=deleteMe;/g, '--');
            let rest = /SID=.*; D/i;
            let str2 = str.match(rest)[0];
            let rest2 = /SID=.*;/ig;
            let str3 = str2.match(rest2)[0].split(';')[0];
            uni.setStorageSync('Cookie', str3)
          }
          switch (res.statusCode) {//状态码控制
            case 601:
              //弹出安全密码框进行校验
              break;
            case 600:
              uni.removeStorageSync('Cookie');
              this.logout().then(res => {
                if (res.success) {
                  // uni.reLaunch({
                  // 	url: './login',
                  // })
                } else {
                  uni.showToast({
                    title: '退出失败！',
                    icon: 'none'
                  })
                }
              });
              break;
            case 605:
              //获取IP跳转
              break;
            case 606:
              uni.removeStorageSync('Cookie');
              this.logout().then(res => {
                if (res.success) {
                  uni.reLaunch({
                    url: './login',
                  })
                } else {
                  uni.showToast({
                    title: '退出失败！',
                    icon: 'none'
                  })
                }
              });
              break;
            case 607:
              //跳转
              break;
            case 608:
              //token相关错误
              break;
            case 610:
              //获取IP跳转
              break;
            case 404:
              console.log("info404: " + JSON.stringify('info404'));
              // uni.showModal({
              // 	showCancel: true,
              // 	content: "1234"
              // });
              //无此页面
              break;
            case 400:
              //前端请求错误
              uni.showToast({
                title: '本机网络错误！',
                icon: 'none'
              });
              break;
            case 401:
              //错误提示弹窗，清除缓存
              break;
            case 403:
              //错误提示弹窗
              break;
            case 500:
              //后端请求错误
              uni.showToast({
                title: '网络错误！',
                icon: 'none'
              });
              break;
            case 502:
              //跳转
              break;
            default:
              break
          }
          typeof params.success == "function" && params.success(res.data);
        },
        fail: (e) => {
          console.log("网络请求fail:" + JSON.stringify(e));
          uni.hideLoading();
          typeof params.fail == "function" && params.fail(e.data);
        },
        // 请求完成
        complete: () => {
          uni.hideLoading();
          typeof params.complete == "function" && params.complete();
          
        }
      });
      
    })
  },
  
  login(data) {
    return this.post({
      url: '/api-driver/driver/passport/login.html',
      data,
      queryString: true//控制 header['content-type']的值
    })
  },
  logout(data) {
    return this.post({
      url: '/api-driver/driver/passport/logout.html',
      data,
      queryString: true
    })
  },
}

```

#### 3，main.js

```
import service from '@/util/service.js'
Vue.prototype.$service = service;//挂载到原型上
```

#### 4，页面使用

```
let vm=this;
vm.$service.login(paramData).then(res => {console.log(res)})
```

#### 阶段总结

1，如接口过多，可再单独写到.js文件中抽离导出

2，需跟后端协商好，状态码及返回内容集合格式

