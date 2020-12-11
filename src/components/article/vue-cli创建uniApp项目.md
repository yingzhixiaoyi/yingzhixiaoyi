## vue-cli创建uniApp项目

[vue-cli官网][https://cli.vuejs.org/zh/guide/installation.html]

[uniApp官网][https://uniapp.dcloud.io/]

### 环境安装 

```javascript
全局安装vue-cli
npm install -g @vue/cli

创建UniApp
vue create -p dcloudio/uni-preset-vue 你的项目名
```

##### 注意：name不能包含大写字母

![1607679256376](https://imgkr2.cn-bj.ufileos.com/b55feb2a-132c-4a22-b6bb-e5b03fe8e35e.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=LWeges%252FVxSO78hi6riaPzp5u3%252FA%253D&Expires=1607766661)


##### 选择模板
![1607679368973](https://imgkr2.cn-bj.ufileos.com/d63b1225-43b2-4951-8e45-1b3152940a6d.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=pxRKsZqZZCOQrrpvG76CzYFTz3Y%253D&Expires=1607766683)


##### cd到目录，yarn serve || npm run serve 启动项目
![1607679487125](https://imgkr2.cn-bj.ufileos.com/214b5b05-cee8-497e-a9ba-2e855ed22d66.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=tGE3dWR3ocIeIX8WF%252F2dJHZNbTc%253D&Expires=1607766701)


##### 点击链接，查看页面
![1607679586221](https://imgkr2.cn-bj.ufileos.com/6a46bd77-f5e9-4042-8565-15b4bbdebeca.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=2ePPD05L8B%252BAkoTaUjp5cFCP3BA%253D&Expires=1607766709)
##### 项目生成文件

![1607680534685](https://imgkr2.cn-bj.ufileos.com/19709a0b-ac13-4889-a1ea-523a36656b41.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=wcc8qMuNV00VAld7Wtm6FoLdz1I%253D&Expires=1607767073)


#### 阶段总结：

1，vue-cli生成的项目可以，用HbuilderX打开

2，H5环境与APP环境异同，APP环境读取不到window