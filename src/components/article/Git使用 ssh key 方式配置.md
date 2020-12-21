---
typora-copy-images-to: upload
---

## Git使用 ssh key 方式配置

### 1.Git官网下载安装git客户端：https://git-scm.com/downloads/

### 2.安装完成后，在空白处点鼠标右键选择“Git Bush Here” ，打开git bash命令窗口

![img](http://192.168.0.200:4999/Public/Uploads/2020-07-03/5efeaaed7e5ff.png)

### 3.配置用户名和邮箱

git config —global user.name “richard”
git config —global user.email “[richard@yingtai.net](mailto:richard@yingtai.net)”
配置后结果：
![img](http://192.168.0.200:4999/Public/Uploads/2020-07-03/5efeabb664ef2.png)

### 4.执行命令生成ssh pub_key

##### ssh-keygen -t rsa -C “[richard@yingtai.net](mailto:richard@yingtai.net)”

##### 执行命令多次回车后出现如下：

![img](http://192.168.0.200:4999/Public/Uploads/2020-07-03/5efead3da85a2.png)

##### 到.ssh的默认目录下查看：（默认目录一般是：C:\Users\richard.ssh\）

![img](http://192.168.0.200:4999/Public/Uploads/2020-07-03/5efeadeb4b9e6.png)

### 5.打开生成后的id_rsa.pub文件，copy内容到git ssh个人设置

![img](http://192.168.0.200:4999/Public/Uploads/2020-07-03/5efeaf7a89c44.png)

##### 点击add key后如下界面是已经配置好：

![img](http://192.168.0.200:4999/Public/Uploads/2020-07-03/5efeafc446406.png)

### 6.本地拉取代码

![img](http://192.168.0.200:4999/Public/Uploads/2020-07-03/5efeb2d3880b6.png)