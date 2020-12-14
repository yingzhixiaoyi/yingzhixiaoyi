## uniApp快速开发一个安卓应用

##### 承接上文：vue-cli创建uniapp项目

##### 本期将会用到的开发工具及SDK：

1，[HBuilderX][https://www.dcloud.io/]  2，[Android Studio][http://www.android-studio.org/]  3，[Android SDK][https://nativesupport.dcloud.net.cn/UniMPDocs/SDKDownload/android]

```
步骤1：

将上期创建的项目，用HBuilderX打开，运行到浏览器看效果，编写代码，再本地打包，HBuilderX部分操作完成

步骤2：

下载Android SDK，因SDK版本更新太快，每个版本需要改动的较大。故不提供图片做为参考

步骤3：

用Android Studio打开SDK实例demo，Android Studio会自动下载依赖，可以真机调测，或build出正式版

步骤4：

将HBuilderX打包出来的文件，复制到实例demo的\app\src\main\assets\apps目录下

4.1，文件名改为实例demo的文件名

4.2，manifest.json中的“id"改为实例的”id“

步骤5：

此时可以真机调试查看APP，亦可打包出正式版本；如需要做更多修改，则需要具备一定的Android开发能力

```

![10](https://imgkr2.cn-bj.ufileos.com/199dfda6-c527-4c36-997c-1df3f2da0a32.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=pn%252Fl7psQ7x7wQAI4vxpRim97D3A%253D&Expires=1608013958)


##### 如添加地图操作：AndroidManifest.xml文件中添加权限和meta-data的packageName key

![12](https://imgkr2.cn-bj.ufileos.com/327ae978-eb13-4f78-8f9a-aac2ecd1bed1.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=iSDS%252BcXfPf%252Fop5A8j2F1FDj71xQ%253D&Expires=1608013987)
![11](https://imgkr2.cn-bj.ufileos.com/fa465704-1989-4639-97a9-2933c8fa8f0b.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=SHptQJRWGKsgm2QEp11%252FwwvpKNU%253D&Expires=1608013992)




#### 阶段总结：

1，需要注意的 id 的统一，package name的统一

2，如需要添加地图操作，uniapp的模块配置中的定位服务和maps服务并填写申请的第三方key

