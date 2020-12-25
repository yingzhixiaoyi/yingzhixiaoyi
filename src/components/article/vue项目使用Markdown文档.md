## vue项目使用Markdown文档

#### 1、使用插件[mavonEditor][https://www.npmjs.com/package/mavon-editor]
![1607487449591](https://gitee.com/yingzhixiaoyi/mdnice/raw/master/blogImage/1607487449591.png)

#### 2、main.js操作

```
// 引入makrdown插件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);
```

#### 3、页面使用

```
<template>
    <div class="mavonEditor">
        <mavon-editor :toolbars="markdownOption" style="box-shadow: none;width: 60vw;margin: 0 auto" v-model="handbook"/>
    </div>
</template>

<script>
  export default {
    name: "contents",
    data() {
      return {
        markdownOption: {
          bold: true, // 粗体
        },
        handbook: ''
      };
    },
    watch:{
      '$route.query'(e){
        if(e.id){
          this.getList(e.id)
        }
      }
    },
    methods: {
      async getList(id) {
        const data = await import(`../components/article/${id}.md`)
        this.handbook = data.default
      }
    },
    mounted() {
      this.getList(this.$route.query.id)
    }
  };
</script>

<style lang="less" scoped>
    .mavonEditor {
        width: 100%;
    }
    
    /deep/ .v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper {
        flex: 0;
        -webkit-flex: 0;
    }
    
    /deep/ .v-note-edit.divarea-wrapper {
        visibility: hidden;
        flex: 0;
        height: 0;
        -webkit-flex: 0;
    }
    
    /deep/ .v-note-wrapper .v-note-panel .v-note-show {
        flex: 1;
    }
    /deep/.v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html{
        padding: 20px 0;
    }
    
    /deep/ .v-note-op {
        visibility: hidden;
    }
    
    /deep/ .v-note-wrapper {
        box-shadow: none;
        margin-top: 80px;
        min-width: 300px;
        min-height: 300px;
        z-index: 0;
        text-align: left;
    }
</style>

```

#### 4、vue项目查找 .md文件

```
const files = require.context('../components/article', true, /\.md$/);//指定目录，全部查找，正则匹配
let brr = [];
let arr = files.keys().map((item, index) => {
  brr.push(item.replace('./', '').replace('.md', '') || '')
  //获取到全部文件名集合数组
```



#### 5、阶段总结

1，此插件为.md的线上编译器+预览

2，样式上需要手动调整，如遇到</code></pre>情况展示错误，可加空行或者一个tab间隔分离就OK