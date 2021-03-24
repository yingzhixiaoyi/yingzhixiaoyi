## Vue项目切换主题



```
App.Vue文件中

 <div id="app" ><router-view /></div>
 
  mounted() { // 主题颜色
  this.setTheme() },
  
  methods: {
	setTheme() {
    document.getElementById("app").className=electronStore.get("theme-color")?electronStore.get("theme-color"):"BlackLook"},
    
  watch: {
    '$store.getters.getChangeThemeColor'(){
     // 主题颜色
     this.setTheme();}
        
```

```
新建theme.less文件
.BlackLook {
  --theme-color:#05a875;
}
.BlueLook {
  --theme-color: #0679FF;
}
```

```
main.js文件中
import "@/assets/less/theme.less";
```

```
使用方式，任一.Vue文件style中使用
background: var(--theme-color);
```

#### 阶段总结：

1，单页面应用，监听仓库中主题变量，改变根节点className

2，如需配置对应主题的其他操作，可以另新建js文件，根据主题变量输出异同的内容