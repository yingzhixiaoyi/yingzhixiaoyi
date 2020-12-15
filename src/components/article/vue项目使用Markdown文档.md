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
        <ul class="list">
            <h2>文章列表：</h2>
            <li v-for="item in $store.state.contents">
                <a @click="getList(item)">{{item}}</a>
            </li>
        </ul>
        <mavon-editor :toolbars="markdownOption" style="box-shadow: none" v-model="handbook"/>
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
    .list {
        position: fixed;
        top: 20%;
        left: 8%;
        z-index: 2;
        border: 1px solid #FBFBFB;
        background-color: #F6F8FA;
        border-radius: 5px;
        padding: 20px 30px;
        
        h2 {
            font-weight: 600;
            font-size: 24px;
        }
        
        li {
            margin-top: 20px;
            color: #428bca;
            cursor: pointer
        }
    }
    
    .mavonEditor {
        width: 100%;
        height: 100%;
    }
    
    /deep/ .v-note-edit.divarea-wrapper {
        visibility: hidden;
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
    
    /deep/ .v-note-show {
        margin-left: -20%;
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