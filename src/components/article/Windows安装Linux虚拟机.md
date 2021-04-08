## Windows安装Linux虚拟机

##### 安装Ubuntu

可在Microsoft Store中搜索下载，或网上另找资源，正常安装打开，如遇到安装注册报错，请设置启动适用于Linux的Windows子系统选项

步骤：控制面板 —> 启动或关闭Windows功能 —> 勾选适用于Linux的Windows子系统

![image-20210408120707854](https://gitee.com/yingzhixiaoyi/mdnice/raw/master/LiOoWZAE8szFI3d.png)



##### 进入虚拟机

```
bash (进入虚拟机操作)

sudo apt-get update (更新下载，开启下载功能)

sudo apt install nodejs (下载node)
```



![image-20210408122121013](https://gitee.com/yingzhixiaoyi/mdnice/raw/master/image-20210408122121013.png)



##### 2.4 前端项目运行安装nodejs和yarn相关配置

同样是打开Terminal窗口，配置相关环境（查看项目中的README.md文件，下面代码供参考，每个项目可能不一样）：

```
###node jscurl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -sudo apt-get install -y nodejs
###yarn安装curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.listsudo apt-get update && sudo apt-get install yarn
###私有仓库地址npm set registry http://192.168.0.200:4873yarn config set registry http://192.168.0.200:4873yarn config set ignore-engines true
###编译环境sudo yarn
### 启动yarnsudo yarn start
```

