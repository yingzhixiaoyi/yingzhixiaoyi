<template>
    <div class="mavonEditor">
        <!--        <ul class="list">-->
        <!--            <h2>文章列表：</h2>-->
        <!--            <li v-for="item in $store.state.contents">-->
        <!--                <a @click="getList(item)">{{item}}</a>-->
        <!--            </li>-->
        <!--        </ul>-->
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
        console.log(
          '~~~~~~~~~~~~~~~~~~~~~~~~~~~',
          data.default
          , '~~~~~~~~~~~~~~~~~~~~~~~~~~~'
        )
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
        /*height: 100%;*/
    }
    /deep/ .v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper{
        flex: 0;
        -webkit-flex:0;
    }
    /*/deep/ .v-note-wrapper .v-note-panel .v-note-show{*/
    /*    flex: 1;*/
    /*}*/
    /deep/ .v-note-edit.divarea-wrapper {
        visibility: hidden;
        flex: 0;
        -webkit-flex:0;
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
