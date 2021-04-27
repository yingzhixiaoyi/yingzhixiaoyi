<template>
  <div id="app" v-cloak>
    <loading></loading>
    <layout-header></layout-header>
    <layout-body></layout-body>
    <layout-footer></layout-footer>
  </div>
</template>
<script>
import layoutHeader from '@/components/layout/layout-header'
import layoutBody from '@/components/layout/layout-body'
import layoutFooter from '@/components/layout/layout-footer'
import Loading from '@/components/loading'

export default {
  name: "app",
  components: {
    layoutHeader,
    layoutBody,
    layoutFooter,
    Loading
  },
  beforeMount() {
    // CreateChatBox
      if(!window.init){
        this.openChatCustomer()
      }
  },
  methods: {
    async openChatCustomer() {
      if (window.init) {
        window.openCustomer()
      } else {
        setTimeout(() => {
          this.openChatCustomer()
        }, 2000)

      }
    }
  }
}
</script>
<style lang="less">
#app {
  font-size: 17px;
  color: #6f6f6f;
}
</style>
