## IntelliJ IDEA 2019.2破解安装

1，正常安装IDEA，选择试用进入软件

2，获取到jetbrains-agent.jar文件(破解包解压获得)，放置到你喜欢的目录下

3，获取到ACTIVATION_CODE.txt文件(破解包解压获得)，此为离线注册码

```
1. 启动你的IDE，如果上来就需要注册，选择：试用（Evaluate for free）进入IDE

2. 点击你要注册的IDE菜单："Configure" 或 "Help" -> "Edit Custom VM Options ..."
    如果提示是否要创建文件，请点"Yes"。
    
3. 在打开的vmoptions编辑窗口末行添加：-javaagent:/absolute/path/to/jetbrains-agent.jar
    一定要自己确认好路径(不要使用中文路径)，填错会导致IDE打不开！！！最好使用绝对路径。
	一个vmoptions内只能有一个-javaagent参数。
    示例:
      mac:      -javaagent:/Users/neo/jetbrains-agent.jar
      linux:    -javaagent:/home/neo/jetbrains-agent.jar
      windows:  -javaagent:C:\Users\neo\jetbrains-agent.jar
   	  my：-javaagent:D:\Software\IntelliJ IDEA 2019.2\jetbrains-agent.jar
    
4. 重启你的IDE。

5. 点击IDE菜单 "Help" -> "Register..." 或 "Configure" -> "Manage License..."
    支持两种注册方式：License server 和 Activation code:
    1). 选择License server方式，地址填入：http://jetbrains-license-server （应该会自动填上）
        或者点击按钮："Discover Server"来自动填充地址。
    2). 选择Activation code方式离线激活，请使用：ACTIVATION_CODE.txt 内的注册码激活
        如果激活窗口一直弹出（error 1653219），请去hosts文件里移除jetbrains相关的项目

 本项目在最新2019.2上测试通过。
```

