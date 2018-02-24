<template>
  <div id="app">
     <el-container>
      <el-header><header-e></header-e></el-header>
      <el-main>
        <h1>i am main</h1>
        <router-view/>
      </el-main>
      <el-footer><footer-e></footer-e></el-footer>
    </el-container>
  </div>
</template>

<script>
import headerE from './components/header-e.vue'
import footerE from './components/footer-e.vue'
export default {
  name: 'App',
  components: {
    headerE: headerE,
    footerE: footerE
  }
}
</script>

<style>

</style>
