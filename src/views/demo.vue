<template>
    <div class="mavonEditor">
        <mavon-editor :toolbars="markdownOption" style="box-shadow: none" v-model="handbook"/>
    </div>
</template>

<script>
  import demo from "../components/article/百度地图 vue-baidu-map.md";
  
  export default {
    name: "demo",
    data() {
      return {
        markdownOption: {
          bold: true, // 粗体
        },
        handbook: demo
      };
    }
  };
</script>

<style scoped>
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
        margin-left: -25%;
    }

</style>
