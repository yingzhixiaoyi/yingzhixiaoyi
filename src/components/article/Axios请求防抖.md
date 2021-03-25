## Axios封装及请求防抖

```
//request.js文件中
import axios from "axios";
//import些你需要的插件或者数据...
let requests=[];//请求防抖需要收集请求中的集合，并控制过滤

/****** 创建axios实例 ******/
const service = axios.create({
  baseURL: process.env.BASE_URL, // 接口基础路径
  timeout: 5000  // 请求超时时间
  // transformResponse 允许自定义原始的响应数据（字符串）
  transformResponse: [function (data) {
    try {// 如果转换成功则返回转换的数据结果return JSON.parse(data)
    } catch (err) {// 如果转换失败，则包装为统一数据格式并返回return data}
  }]
})


/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(async config => {
    
     // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
    let flag = await stopRepeatRequest(requests, config.url, `${config.url} 请求重复`)
    if (flag) {return}
    if (!config.method) {config.method = "get";}//设置默认请求方式
    try {setConfig(config);} catch (error) {console.error(error);}//预设请求头
    //...此处可以考虑添加一些请求loading样式或者什么的
    return config;
}, error => {//请求错误处理,如结束loading什么的操作等 Promise.reject(error)})
    
    

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {  //成功请求到数据
        //这里根据后端提供的数据进行对应的处理等
        allowRequest(requests, response.config.url)//过滤掉已结束的请求
         if (code === "-9000") {//前后端约定的一些返回处理}
        return response.data;
    },
    error => {  //响应错误处理
       allowRequest(requests, response.config.url)//过滤掉已结束的请求
        if (code === "-9000") {//前后端约定的一些返回处理}
        return Promise.reject(error)
    }
);
// 拦截request,设置全局请求为ajax请求
function setConfig(config, fetch) {
    let headers = {};
    // 用户登录后获取的token
    headers["token"] = config.headers["token"] = electronStore.get("token") || "";
   //预设更多的请求头....
    if (fetch) {
        return headers;
    }
}
//请求中的URL集合
function stopRepeatRequest(reqList, url, errorMessage) {
    if (url.indexOf('upload/uploadChunkFile') != -1 || url.indexOf('api/chat/getUserHistoryMsgs') != -1 || url.indexOf('api/chat/ackUserOffLineMsgs') != -1) {
        return false
    }
    if (reqList.length) {
       let arr= reqList.filter(item=>item==url)
        if(arr.length){
            console.log(errorMessage,49)
            return  true
        }
    }
    reqList.push(url)
}
//单个请求结束后的URL
function allowRequest (reqList, url) {
    if (reqList.length) {
        requests=reqList.filter(item=>item!=url)
    }
};
export default service;

```



