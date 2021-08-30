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
